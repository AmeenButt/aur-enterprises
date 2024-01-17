const express = require('express');
const router = express.Router();
const multer = require('multer');
const controller = require('../../controller/universal/imageUploadController')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        // Remove spaces from the original filename
        const originalnameWithoutSpaces = file.originalname.replace(/\s+/g, '_');
        cb(null, Date.now() + "--" + originalnameWithoutSpaces);
    }
})
const upload = multer({
    storage: storage
})
router.post('/upload', upload.single('image'), controller.upload)
module.exports = router