const route = require("express").Router();
const candidaturecontroller = require("../Controllers/CandidatureController");
route.post("/createcandidature",candidaturecontroller.CreateCandidature);
route.get('/getallcandidature',candidaturecontroller.getAllCandidature);

route.get('/getcandidaturebyid/:id',candidaturecontroller.getCandidatureById);
route.put('/updatecandidature/:id',candidaturecontroller.UpdateCandidature);
route.delete('/deletecandidature/:id',candidaturecontroller.DeleteCandidature);
module.exports = route;