var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    appareil_id: Number,
    appareil_name: String,
    appareil_status: Number,
    appareil_emprunterId: Number
});

module.exports = mongoose.model('Product', ProductSchema);