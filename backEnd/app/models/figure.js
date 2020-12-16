const mongoose = require('mongoose'); 
  
var figureSchema = new mongoose.Schema({  
    name: String,
    year: String,
    toyLine: String,
    doHave: Boolean,
    image: Object,
    accessoryId: Array
  });
  
const Figure =  mongoose.model('Figure', figureSchema); 
module.exports = Figure;