const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String
    // location: String,
    // employee: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Products', ProductSchema);