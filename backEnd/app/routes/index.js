const express = require('express');
const Figure = require('../models/figure');
const router = express.Router();

// INDEX Route
router.get('/api/figures', (req, res) => {
  Figure.find()
    .then((allFigures) => {
      res.status(200).json({ figures: allFigures });
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});


module.exports = router;