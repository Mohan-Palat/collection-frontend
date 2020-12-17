const express = require('express');
const Figure = require('../models/figure');
const router = express.Router();

/// delete route
router.delete('/api/figures/:id', (req, res) => {
  Figure.findById(req.params.id)
    .then((figure) => {
      if (figure) {
        return figure.remove();
      } else {
        res.status(404).json({
          error: {
            name: 'DocumentNotFoundError',
          }
        });
      }
    })
    .then(() => {
      // return success code
      res.status(204).end();
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});


module.exports = router;