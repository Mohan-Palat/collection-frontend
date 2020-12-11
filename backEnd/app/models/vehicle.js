const mongoose = require('mongoose'); 
  
var vehicleSchema = new mongoose.Schema({  
    name: String,
    year: String,
    toyLine: String,
    doHave: Boolean,
    imageId: Object,
    accessoryId: Object,
    figureId: Object
  });
    
module.exports = new mongoose.model('Vehicle', vehicleSchema); 