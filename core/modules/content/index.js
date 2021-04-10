const Page = require('../..//models/page');
const {Content} = require('../../models/content');
const {CONTENT_TYPES} = require('../../const');

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


exports.createOrUpdatePage = async ({content, id, alias, ...rest}) => {
  const updatedContents = await updateContentsAndReturnIds({content});
  if (!!id) {
    return !!(await Page.findOneAndUpdate({_id: id}, {alias, ...rest, content: [...updatedContents]}));
  } else {
    const newPage = await Page.create({alias, ...rest, content: [...updatedContents]});
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
