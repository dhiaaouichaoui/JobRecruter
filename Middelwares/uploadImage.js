const multer = require ('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'./storages');
    },
    filename: (req,file,cb) =>{
        cb(null,new Date().toISOString().replace(/:/g,'-') + file.originalname);
    },
});
const fileFilter = (req,file,cb) => {
    if(
        file.mimetype == 'image/jpeg'||
        file.mimetype == 'image/png'||
        file.mimetype == 'image/jpg'

    ){
        cb(null,true);
    }else{
        cb(new Error('image uploaded is not of type jpeg/png or jpg'), false);
    }
};
module.exports = multer({ storage: storage,fileFilter: fileFilter, limits:{_fileSize:1024*1024*1024*10}});