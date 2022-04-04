const route = require("express").Router();
const entretiencontroller = require("../Controllers/EntretienController");

route.post('/createentretien',entretiencontroller.CreateEntretien);
route.get('/getallentretien',entretiencontroller.getAllEntretien);


module.exports = route;