const mongoose = require('mongoose'); 
  
var vehicleSchema = new mongoose.Schema({  
    name: String,
    year: String,
    toyLine: String,
    doHave: Boolean,
    imageId: Object,
    accessoryId: Array,
    figureId: Array
  });
    
module.exports = new mongoose.model('Vehicle', vehicleSchema); 