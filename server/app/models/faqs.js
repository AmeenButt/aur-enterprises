const mongoose = require('mongoose');
const faqsSchema = new mongoose.Schema({
    question: String,
    answer: String,
    created_at: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("Faqs", faqsSchema);