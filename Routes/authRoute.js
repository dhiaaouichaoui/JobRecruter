const route = require("express").Router();
const AuthController = require("../Controllers/AuthController");
const upload = require('../Middelwares/uploadImage');
const check_auth = require("../Middelwares/check_authentification");
const passport = require('passport');
require('../Middelwares/passport_authentification').passport;

route.post("/registreadmin", AuthController.registreAdmin);
route.post("/registrecandidat",AuthController.registrecandidat);
route.post("/registreentreprise2",upload.single("photo"),AuthController.registreentreprise2);
route.get("/verify-now/:verificationcode", AuthController.verifyemail);
route.post("/login", AuthController.login);
route.get('/profile', passport.authenticate('jwt', { session: false }),AuthController.profile);
route.put('/profileUpdate',passport.authenticate('jwt',{ session: false}),AuthController.updateProfile);



module.exports = route;