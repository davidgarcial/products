const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let product = new Schema({
   name: {
      type: String
   },
   description: {
      type: String
   },
   price: {
      type: Number
   }
}, {
   collection: 'product'
})

module.exports = mongoose.model('product', product)