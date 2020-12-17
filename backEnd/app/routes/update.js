
const express = require('express');
const Figure = require('../models/figure');
const router = express.Router();

//UPDATE route
router.patch('/api/figures/:id', (req, res) => {
  Figure.findById(req.params.id)
    .then((figure) => {
      if (figure) {
        return figure.updateOne(req.body);
      } else {
        res.status(404).json({
          error: {
            name: 'DocumentNotFoundError',
          }
        });
      }
    })
})

module.exports = router;