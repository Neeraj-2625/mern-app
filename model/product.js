const mongoose = require('mongoose');
const {Schema} = mongoose;


// == Schema == //
const productSchema = new Schema({
    title: {type: String},
    description: String,    //shorthand for {type: String}
    price: Number,
    discountPercentage: {
        type: Number,
        min: [0,'Wrong rating'],
        max: [50,'Wrong rating']
    },
    rating: {
        type: Number,
        min: [0,'Wrong rating'],
        max: [5,'Wrong rating'],
        default:0
    },
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
  });
  
  //using Schema
  exports.Product = mongoose.model('Product',productSchema);