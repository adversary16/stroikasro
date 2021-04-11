const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RouteSchema = new Schema({
  link: {
    type: String,
    required: true,
  },
  page: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  parent: {
    type: mongoose.Types.ObjectId,
    ref: 'Route',
  },
});

RouteSchema.pre('save', async function save(next) {
  const route = await Route.find({});
  console.log(route);
  return next();
});

module.exports = mongoose.model('Route', RouteSchema);
