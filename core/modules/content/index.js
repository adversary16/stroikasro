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

const updateRoute = async ({id, link, alias}) => {
  const updatedRoute = await route.findOneAndUpdate({link}, {page: id, link, alias}, {upsert: true});
  return !!updatedRoute;
};

exports.createOrUpdatePage = async ({content, id, alias, link, ...rest}) => {
  const updatedContents = await updateContentsAndReturnIds({content});
  if (!!id) {
    const updatedPage = await Page.findOneAndUpdate({_id: id}, {alias, ...rest, content: [...updatedContents]});
    updatedPage && await updateRoute({id: updatedPage._id, link, alias});
    return updatedPage._id || false;
  } else {
    const newPage = await Page.create({alias, ...rest, content: [...updatedContents]});
    await newPage.save();
    newPage && await updateRoute({id: newPage._id, link, alias});
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
  const [primary, secondary, ...rest] = route;
  const primaryOrIndexQuery = primary ?
  {link: primary} : {isIndex: true};

  console.log(primaryOrIndexQuery);

  const filter = secondary ?
  [
    {$match: {link: secondary}},
    {$lookup: {
      from: 'routes',
      localField: 'parent',
      foreignField: '_id',
      as: 'parent',
    }},
    {$match: {
      'parent.link': primary,
    }},

  ]:
  [{$match: {...primaryOrIndexQuery}}];

  const [requestedPage] = await Route.aggregate([
    ...filter,
    {$lookup: {
      from: 'pages',
      localField: 'page',
      foreignField: '_id',
      as: 'properties',
    }},
    {$lookup: {
      from: 'contents',
      localField: 'properties.content',
      foreignField: '_id',
      as: 'page.content',
    }},
    {$lookup: {
      from: 'routes',
      localField: '_id',
      foreignField: 'parent',
      as: 'childPages',
    }},
    {$project: {
      content: '$page.content',
      properties: {$arrayElemAt: ['$properties', 0]},
      childPages: '$childPages',
    }},
    {$project: {
      content: '$content',
      alias: '$properties.alias',
      banner: '$properties.banner',
      childPages: '$childPages',
    }},
  ]);
  requestedPage.content.reverse();
  return requestedPage;
};

exports.getStructure = async () => {
  const structure = await Route.aggregate([
    {$match:
      {page: {$exists: true}},
    },
    {$lookup: {
      from: 'pages',
      localField: 'page',
      foreignField: '_id',
      as: 'page',
    },
    },
    {$group: {
      _id: {
        link: '$link',
        alias: '$page.alias',
        menuOrder: '$menuOrder',
        isIndex: '$isIndex',
      },
    }},
    {$project: {
      'link': '$_id.link',
      'alias': {$arrayElemAt: ['$_id.alias', 0]},
      'menuOrder': '$_id.menuOrder',
      'isIndex': '$_id.isIndex',
      '_id': 0,
    }},
    {$sort: {
      menuOrder: 1,
    },
    },
  ]);
  return Object.values(structure);
};
