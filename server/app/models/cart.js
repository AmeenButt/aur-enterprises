const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    categoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    created_at: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("Cart", categorySchema);