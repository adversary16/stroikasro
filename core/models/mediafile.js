const mongoose = require('mongoose');
const {MEDIA_TYPES} = require('../const');
const Schema = mongoose.Schema;
const options = {discriminatorKey: 'type'};

const MediaFileSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  checksum: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: Object.keys(MEDIA_TYPES),
  },
});

exports.MediaFile = mongoose.model('File', MediaFileSchema);
