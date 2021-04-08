const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  PASSWORD_HASHING_ROUNDS,
  JWT_TOKEN_EXPIRATION,
  JWT_ISSUER,
  JWT_TOKEN,
} = require('../const');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    unique: true,
    index: true,
    trim: true,
    sparse: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
});

userSchema.pre('save', async function save(next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    this.password = await bcrypt.hash(this.password, PASSWORD_HASHING_ROUNDS);
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.generateToken = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + JWT_TOKEN_EXPIRATION);

  return jwt.sign({
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
    iss: JWT_ISSUER,
  }, JWT_TOKEN);
};


module.exports = mongoose.model('User', userSchema);
