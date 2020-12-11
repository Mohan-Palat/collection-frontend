const mongoose = require('mongoose'); 
  
var imageSchema = new mongoose.Schema({  
    src: String,
    contentType: String,
    imgType: String
  });

module.exports = new mongoose.model('Image', imageSchema); 