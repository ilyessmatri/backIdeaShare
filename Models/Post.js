const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
  
    content: {
      type: String,
      required: true
    },
  
  
    image: {
      type: String,
      default: "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw96e56466/images/funko/upload/1/83613_POP-Disney_HPR_POP1_HopperMabel_GLAM-WEB.png?sw=800&sh=800"
    },
  
    date: {
      type: Date,
      default: Date.now()
    }  
   
})



module.exports = mongoose.model("POST", postSchema);
