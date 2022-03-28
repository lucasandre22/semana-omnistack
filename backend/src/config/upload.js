const multer = require('multer');
const path = require('path');
//how multer will store our images
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'upload'),
        filename: (req, file, callback) => { //callback will me called when the filename is ready
            const extension = path.extname(file.originalname)
            const name = path.basename(file.originalname, extension);
            callback(null, `${name}-${Date.now()}-${req.body.company}${extension}`)
        }
    }),
};