import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name_of_supplier: String,
    product_information: String,
    category: String,
    quantity: Number,
    timeline: {
        type: Date,
        required: true,
    },
    location: String,
    required_for: String,
})

const item = mongoose.model('item', itemSchema);

export default item;