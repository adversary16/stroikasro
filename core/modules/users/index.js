const user = require('../../models/user');

exports.getUser = async function getUser({userId}) {

};

exports.getAllUsers = async function getAllUsers() {
  const users = await user.find({});
  return users.map(({_doc: {password, ...rest}}) => ({...rest}));
};
