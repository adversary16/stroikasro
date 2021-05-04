const Company = require('../../models/company');

exports.getAllCompanies = async () =>{
  return await Company.find({});
};
exports.createOrUpdateCompany = async ({company}) => {
  const {_id} = company;
  if (_id) await Company.findOneAndUpdate({_id}, company);
  const newCompany = new Company(company);
  return newCompany.save();
};
