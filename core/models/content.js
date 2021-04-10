const mongoose = require('mongoose');
const options = {discriminatorKey: 'type'};
const {CONTENT_TYPES} = require('../const/');

const Schema = mongoose.Schema;

const contentSchema = new Schema({
  title: {
    type: String,
    index: false,
    required: false,
  },
  type: {
    type: String,
    index: false,
    enum: Object.values.CONTENT_TYPES,
  },
});

const HTMLContentSchema = new Schema({
  value: {
    type: String,
    index: true,
    default: '',
  },
  type: {
    type: String,
    default: CONTENT_TYPES.html,
  },
}, options);

const BlockContentSchema = new Schema({
  type: {
    type: String,
    default: CONTENT_TYPES.block,
  },
  blocktype: {
    type: String,
    required: true,
  },
}, options);

const Content = mongoose.model('Content', contentSchema);

exports.Content = Content;
exports.HTMLContent = Content.discriminator(CONTENT_TYPES.html, HTMLContentSchema);
exports.BlockContent = Content.discriminator(CONTENT_TYPES.block, BlockContentSchema);
