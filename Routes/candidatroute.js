const route = require("express").Router();
const CandidatController = require("../Controllers/CandidatController");

route.get('/getAllcandidat',CandidatController.getAllCandidat);


route.get('/getcandidatbyname',CandidatController.getCandidatByName);
route.put('/updatecandidat/:id',CandidatController.UpdateCandidat);




module.exports = route;