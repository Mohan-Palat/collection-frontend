// Require necessary NPM packages
const express = require('express');

// Require Mongoose Model for Article
const Figure = require('../models/figure');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

// INDEX Route
router.get('/api/figures/:id', (req, res) => {
    Figure.findById(req.params.id)
    // Return all Articles as an Array
    .then((foundFigure) => {
      res.status(200).json({ figure: foundFigure });
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
  });


module.exports = router;