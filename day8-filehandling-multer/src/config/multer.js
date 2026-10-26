const multer = require("multer");


//disk storage for local no buffer
const storageForLocal = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

//memory storage for server with buffer(chunks)
// const storageForServer = multer.memoryStorage()

const upload = multer({ storage: storageForLocal });




module.exports = upload;
