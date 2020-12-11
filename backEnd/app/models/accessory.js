const mongoose = require('mongoose'); 
  
var accessorySchema = new mongoose.Schema({  
    accessoryName: String,
    doHave: Boolean,
    imageId: Object
  });
  
module.exports = new mongoose.model('Accessory', accessorySchema); 