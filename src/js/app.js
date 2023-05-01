const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// MidLeewards
app.use(cors());
app.use(bodyParser.json());

// Import ROUTER
const postsRouter = require('../js/routers/posts');

app.use('/posts', postsRouter);

// ROUTER
app.get('/', (req, res) => {
  res.send('Hello, TuHy');
});

// Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // How to we start listening to the server
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });
