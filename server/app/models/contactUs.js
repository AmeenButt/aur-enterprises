const mongoose = require('mongoose');
const contactUsSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    postalCode: String,
    message: String,
    status:{
        type:String,
        default: "pending"
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("ContactUs", contactUsSchema);