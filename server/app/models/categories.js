const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    icon:String,
    price:Number,
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("Category", categorySchema);