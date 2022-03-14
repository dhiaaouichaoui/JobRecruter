const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Storages");
  },
  filename: (req, file, cb) => {
    //original name
    console.log(file);
    //improtation image et changement nom our ne pas avoir des photo de mm nom (ajout de la date)
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);

    //cb(null, file.originalname);
  },
});
// filtrer sur l'extension
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};

module.exports = multer({
  storage: storage,
  fileFilter: fileFilter,
  //pour filtrer sur la taille de l'image
  limits: { _fileSize: 1024 * 1024 * 1024 * 10 },
});