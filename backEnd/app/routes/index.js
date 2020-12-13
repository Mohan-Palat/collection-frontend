// Require necessary NPM packages
const express = require('express');

// Require Mongoose Model for Article
const Figure = require('../models/figure');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

// INDEX Route
router.get('/api/figures', (req, res) => {
    Figure.find()
    // Return all Articles as an Array
    .then((allFigures) => {
      res.status(200).json({ figures: allFigures });
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
  });
// router.get('/', (req, res) => {
//     ActionFigure.find({}, (error, allFigures) => {
//         res.render('figures/index.ejs', {
//             figures: allFigures
//         });
//     });
// });

module.exports = router;