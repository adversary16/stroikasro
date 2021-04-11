const Page = require('../../models/page');
const Route = require('../../models/route');
const {Content} = require('../../models/content');
const {CONTENT_TYPES} = require('../../const');
const route = require('../../models/route');

const updateContentsAndReturnIds = async ({content = []}) => {
  const contentIdArray = content.reduce( async (acc, item) => {
    const {type, id, value} = item;
    if (!Object.keys(Content.discriminators).includes(type)) return [...acc];
    if (!!id) {
      return [
        ...await acc,
        await Content.findOneAndUpdate({_id: id}, {type, value})._id,
      ];
    } else {
      const newContent = await Content.discriminators[type].create({type, value});
      await newContent.save();
      const {_id} = newContent;
      return [...await acc, _id];
    }
  }, []);
  return await contentIdArray;
};

const updateRoute = async ({id, link}) => {
  const updatedRoute = await route.findOneAndUpdate({link}, {page: id, link}, {upsert: true});
  return updatedRoute._id;
};

exports.createOrUpdatePage = async ({content, id, alias, link, ...rest}) => {
  const updatedContents = await updateContentsAndReturnIds({content});
  if (!!id) {
    const updatedPage = await Page.findOneAndUpdate({_id: id}, {alias, ...rest, content: [...updatedContents]});
    updatedPage && await updateRoute({id: updatedPage._id, link});
    return updatedPage._id || false;
  } else {
    const newPage = await Page.create({alias, ...rest, content: [...updatedContents]});
    newPage && await updateRoute({id: newPage._id, link});
    await newPage.save();
    return newPage._id || false;
  }
};

exports.getPageById = async ({id}) => {
  const requestedPage = await Page.findById(id)
      .populate({
        path: 'content',
      });
  return requestedPage;
};

exports.getPageByRouteName = async ({route}) => {
  const mongoquery = route.reduce((acc, alias) => {
    return (`${acc} ${alias}`);
  }, '');
  const [primary, secondary, ...rest] = route;
  const requestedPage = await Page.findOne({link: primary}).populate({
    path: 'content',
  });
  return requestedPage;
};

exports.getStructure = async () => {
  const structure = await Route.aggregate([
    {$match: {page: {$exists: true}}},
    {$lookup: {
      from: 'pages',
      localField: 'page',
      foreignField: '_id',
      as: 'alias',
    },
    },
    {$group: {
      _id: {
        link: '$link',
        alias: '$alias.alias'},
    }},
    {$project: {
      'link': '$_id.link',
      'alias': {$arrayElemAt: ['$_id.alias', 0]},
      '_id': 0,
    }},
  ]);
  return structure;
};
