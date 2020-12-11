const mongoose = require('mongoose'); 
  
var figureSchema = new mongoose.Schema({  
    name: String,
    year: String,
    toyLine: String,
    doHave: Boolean,
    imageId: Object,
    accessoryId: Object
  });
  
module.exports = new mongoose.model('Figure', figureSchema); 