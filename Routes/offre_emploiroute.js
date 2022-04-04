const route = require("express").Router();
const Offre_emploicontroller = require("../Controllers/Offre_emploiController");
route.post("/createoffre",Offre_emploicontroller.CreateOffre_emploi);
route.get('/getalloffres',Offre_emploicontroller.getAlloffres);
// route.get('/getoffrebyname',Offre_emploicontroller.getOffreByName)
route.get('/getoffrebyid/:id',Offre_emploicontroller.getOffreById);
route.put('/updateoffre/:id',Offre_emploicontroller.UpdateOffre);
route.delete('/deleteoffre/:id',Offre_emploicontroller.DeleteOffre);

route.put('/pushcandidat/:id',Offre_emploicontroller.pushcandidat);
route.put('/pullcandidat/:id',Offre_emploicontroller.pullcandidat);
module.exports = route;