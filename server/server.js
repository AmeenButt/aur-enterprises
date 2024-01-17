const express = require('express');
require('dotenv').config();
const cors = require('cors')
const path = require("path");
const bodyParser = require("body-parser"); 
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(express.static("files"));
app.use(express.urlencoded({ extended: true }));   
app.use("/uploads", express.static("uploads"))
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
mongoose.connect(process.env.DB).then(
    app.listen(process.env.PORT, () => {
        console.log("Connect to Port ", process.env.PORT);
    }),
).catch(e => console.log("Error Occured : ", e));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/admin', require('./app/routes/users/admin'))
app.use('/image', require('./app/routes/universal/imageUploadRoute'))
app.use('/service', require('./app/routes/main/categoriesRoute'))
app.use('/contactUs', require('./app/routes/main/contactUsRoute'))
app.use('/faq', require('./app/routes/main/faqsRoute'))
app.use('/cart', require('./app/routes/main/cartRoute'))

