// Require necessary NPM packages
const express = require('express');

// Require Mongoose Model for Article
const Figure = require('../models/figure');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
* Action:       CREATE
* Method:       POST
* URI:          /api/articles
* Description:  Create a new Article
*/
router.post('/api/figures', (req, res) => {
  console.log('post body', req.body)
    Figure.create(req.body)
    // On a successful `create` action, respond with 201
    // HTTP status and the content of the new article.
    .then((newFigure) => {
      res.status(201).json(newFigure);
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
  });

module.exports = router;