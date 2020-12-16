const mongoose = require('mongoose'); 
  
const imageSchema = new mongoose.Schema({  
    // src: String,
    // contentType: String,
    // imgType: String
    data:Buffer,
    contentType:String
  });
  
  //// new for img upload
// const fileSchema = new mongoose.Schema({
//     meta_data:{}
// });
// const ImgFile = mongoose.model("file",fileSchema);
// const Image = mongoose.model('Image', imageSchema);

// module.exports = { Image, ImgFile }
////


module.exports = new mongoose.model('Image', imageSchema); 