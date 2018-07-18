import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title:  String,
    description: String,
    price:  Number,
    like:   {type: Number, default: 0}
});

const Product = mongoose.model('Product', ProductSchema );


export { Product }