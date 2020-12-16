// Require necessary NPM packages
const express = require('express');

// Require Mongoose Model for Article
const Figure = require('../models/figure');

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

//////// get image working
const fs = require('fs'); 
const path = require('path'); 
const multer = require('multer')

const root = path.dirname(require.main.filename)
console.log(root)

const storage = multer.diskStorage({ 
  destination: (req, file, cb) => { 
      cb(null, 'uploads') 
  }, 
  filename: (req, file, cb) => { 
      cb(null, file.fieldname + '-' + Date.now()) 
  } 
}); 

const upload = multer({ storage: storage }); 
// const mongoose  = require("mongoose");
// const path = require("path");
// const multer = require("multer");
// const File = mongoose.model("file");

router.post('/api/figures', upload.single('image'), (req, res, next) => { 
  console.log("success");
  // let fname='uploads/'+req.file.filename;
  console.log('req.file====',req.file);
  console.log('req.body====',req.body);
  // console.log('filepath====',req.file.mimetype);
  const obj = { 
      name: req.body.name,
      year: req.body.year,
      toyLine: req.body.toyLine,
      doHave: req.body.doHave,
      // image: { 
      //     data: fs.readFileSync(path.join( root+ '/uploads/' + req.file.name)), 
      //     contentType: req.file.mimetype
         
      //  } ,
    }
     Figure.create(obj)
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
////////

/**
* Action:       CREATE
* Method:       POST
* URI:          /api/articles
* Description:  Create a new Article
*/
// router.post('/api/figures', (req, res) => {
//   console.log('post body', req.body)
//     Figure.create(req.body)
//     // On a successful `create` action, respond with 201
//     // HTTP status and the content of the new article.
//     .then((newFigure) => {
//       res.status(201).json(newFigure);
//     })
//     // Catch any errors that might occur
//     .catch((error) => {
//       res.status(500).json({ error: error });
//     });
//   });

module.exports = router;