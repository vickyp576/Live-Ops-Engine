const mongoose = require("mongoose");


const offerSchema = new mongoose.Schema({
    offer_id: String,
    offer_title: String,
    offer_description: String,
    offer_image: String,
    offer_sort_order: Number,
    content: Array,
    schedule: Object,
    target: String,
    pricing: Array,
    username: String
})

const Offer = mongoose.model("Offer",offerSchema);
module.exports = {Offer}