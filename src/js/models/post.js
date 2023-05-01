const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  Title: {
    type: String,
    isRequire: true,
  },
  Education: {
    type: String,
  },
  Image: {
    type: String,
  },
  Image1: {
    type: String,
  },
  Image2: {
    type: String,
  },
  Image3: {
    type: String,
  },
  people: {
    type: String,
  },
  btnreset: {
    type: String,
  },
  motivator: {
    type: String,
  },
  Discount: {
    type: String,
  },
  strikethrough: {
    type: String,
  },
  cash: {
    type: String,
    isNaN: true,
  },
  currency: {
    type: String,
  },
  taxes: {
    type: String,
  },
  Price: {
    type: String,
  },
});

module.exports = mongoose.model('posts', postSchema);
