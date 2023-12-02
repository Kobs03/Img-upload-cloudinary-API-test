const express = require('express')
const router = express.Router()
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer(storage)
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

router.get('/', (req, res) => {
    res.send('WELCOME TO API ROUTE')
    // console.log('env data: ' + process.env.CLOUDINARY_CLOUD_NAME)
})

router.post('/uploads', upload.single('image'), (req, res) => {
    // res.send('WELCOME TO UPLOAD ROUTE')
    console.log('ROUTE REACHED!')
    // res.json(req.file)
    // console.log(req.file)

    // CONVERTING BUFFER DATA INTO READABLE STREAM TO UPLOAD IN CLOUDINARY

    if (req.file) {
        let cld_upload_stream = cloudinary.uploader.upload_stream({ folder: "sneak_pad" },
            function (error, result) {
                console.log(error, result);
            });

        streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);
    }
})

module.exports = router