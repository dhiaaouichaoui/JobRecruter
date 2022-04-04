const route = require("express").Router();
const Categorycontroller = require("../Controllers/CategoryController");
route.post("/createcategory",Categorycontroller.CreateCategory);


route.get('/getAllCategories',Categorycontroller.getAllCategories);
route.get('/getcategorybyid/:id',Categorycontroller.getCategoryById);
route.get('/getcategorybyname/:fullname',Categorycontroller.getCategoryByName);
route.put('/updatecategory/:id',Categorycontroller.UpdateCategory);
route.delete('/deletecategory/:id',Categorycontroller.DeleteCategory);
module.exports = route;

module.exports = route;