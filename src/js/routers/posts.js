const express = require('express');
const { Router } = require('express');
const ROUTER = express.Router();
const POSTS = require('../models/post.js');

// Get back all the posts
ROUTER.get('/', async (req, res) => {
  try {
    const posts = await POSTS.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

// Submits a post
ROUTER.post('/', async (req, res) => {
  const posts = new POSTS({
    Title: req.body.Title,
    Education: req.body.Education,
    Image: req.body.code,
    Image1: req.body.Image1,
    Image2: req.body.Image2,
    Image3: req.body.Image3,
    people: req.body.people,
    btnreset: req.body.btnreset,
    motivator: req.body.motivator,
    Discount: req.body.Discount,
    strikethrough: req.body.strikethrough,
    cash: req.body.cash,
    currency: req.body.currency,
    taxes: req.body.taxes,
    Price: req.body.Price,
  });
  try {
    const savePost = await posts.save();
    res.json(savePost);
  } catch (error) {
    res.json({ message: error });
  }
});

// specific post
ROUTER.get('/:postID', async (req, res) => {
  try {
    const post = await POSTS.findById(req.params.postID);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete post
ROUTER.delete('/:postID', async (req, res) => {
  try {
    const removePost = await POSTS.remove({ _id: req.params.postID });
    res.json(removePost);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update post
ROUTER.patch('/:postID', async (req, res) => {
  try {
    const updatePost = await POSTS.updateOne(
      { _id: req.params.postID },
      { $set: { name: req.body.name } }
    );
    res.json(updatePost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = ROUTER;
