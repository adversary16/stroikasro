const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const companySchema = new Schema({
  shortname: {
    type: String,
    required: true,
    unique: true,
  },
  longname: {
    type: String,
    required: false,
    unique: true,
  },
  type: {
    type: Number,
    required: true,
    enum: [1, 2, 3],
  },
  ownership: {
    type: Number,
    required: true,
    enum: [0, 1, 2, 3],
  },
  inn: {
    type: Number,
    required: true,
    unique: true,
  },
  ogrn: {
    type: Number,
    required: true,
    unique: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('Company', companySchema);
