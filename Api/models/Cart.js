const mongoose = require('mongoose');
const CartSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    bookId:{
        type:Array,
        default:[]
    }
});

module.exports = mongoose.model('cart', CartSchema);