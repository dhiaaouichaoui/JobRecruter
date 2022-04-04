const route = require("express").Router();
const commentairecontroller = require("../Controllers/CommentaireController");

route.post('/createcommentaire',commentairecontroller.CreateCommentaire);
route.get('/getallcommentaire',commentairecontroller.getAllcommentaire);


module.exports = route;