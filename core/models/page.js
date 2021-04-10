const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pageSchema = new Schema({
  link: {
    type: String,
    index: false,
    required: true,
  },
  alias: {
    type: String,
    index: true,
    required: true,
  },
  banner: {
    type: String,
    index: false,
    required: false,
  },
  bannerLink: {
    type: String,
    index: false,
    required: false,

  },
  childPages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Page',
    },
  ],
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Content',
    },
  ],
});

module.exports = mongoose.model('Page', pageSchema);
