const route = require("express").Router();
const authController = require("../Controllers/authController");
const uploadImage = require("../Middelwares/uploadImage");
const passport = require("passport");
require("../Middelwares/passport").passport;

route.post("/register", uploadImage.single("image"), authController.register);
route.get("/login", authController.login);

/* route.get(
  "/profil",
  passport.authenticate("jwt", { session: false }),
  authController.profil
);  */
route.get(
  "/refrechtoken",
  passport.authenticate("jwt", { session: false }),
  authentificationcontroller.RefrechToken
);
// partie admin

route.post("/registeradmin", authController.registerAdmin);
route.get(
  "/profil",
  passport.authenticate("jwt", { session: false }),
  authController.profil
);

route.put(
  "/confirmeduser/:iduser",
  passport.authenticate("jwt", { session: false }),
  authController.confirmedUser
);

// 

module.exports = route;
