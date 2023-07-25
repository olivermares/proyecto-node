const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} =require('multer-storage-cloudinary');
const multer =require('multer');

const store = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'image',
        allowedFormats:['jpg', 'png', 'svg', 'jpeg', 'gif'],
    }
})

const upload = multer ({store})
module.exports = upload;