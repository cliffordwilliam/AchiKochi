const multer = require("multer");
const ImageKit = require("imagekit");

const storage = multer.memoryStorage(); // multer's storage

module.exports = class Utils {
    // both are used to upload to imagekit (NEED CREDS)
    // const RESULT = await Util.imagekit.upload({file:IMAGE_BASE_64,fileName:req.file.originalname,tags:[`${req.file.originalname}`]})
    static imagekit = new ImageKit({
        publicKey: "public_rRyQQh/PteYSEXE1LujPblm8s5Q=",
        privateKey: "private_0unPAJfJgft+uHgcXCliatXDt3w=",
        urlEndpoint: "https://ik.imagekit.io/hohoho",
    });
    static upload = multer({ storage });
};
