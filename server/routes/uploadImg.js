const express = require('express')
const path = require("path")
const multer = require("multer")
const fs = require("fs")
const router = express.Router()

const mimeTypes = ['images/jpeg', 'images/png', 'images/gif']

const storage = multer.diskStorage({
    destination: path.join('images')
})

const upload = multer({
    storage: storage,
    fileFilter: (req,file, callback) => {
        callback(null, mimeTypes.includes(file.mimetype))
    }
})

router.get("/upload", (req,res) => {

})

router.post("/upload", upload.single() ,(req,res) => {

})

module.exports = router