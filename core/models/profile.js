const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  inn: {
    type: String,
    required: true,
    match: /^\d{10}$/,
    unique: true,
  },
});

const ProfileSchema = new Schema({
  fullname: {
    type: String,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
  },
  phone: {
    type: String,
  },
});

module.exports = {
  Profile: mongoose.model('Profile', ProfileSchema),
  Company: mongoose.model('Company', CompanySchema),
};
