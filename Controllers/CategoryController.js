const Category = require("../Models/Category");
CreateCategory = async (req,res) =>{
    try {
        const newcategory = new Category(req.body);
        const category = await Category.create(newcategory);

        res.status(201).json({
            message: "category create",
            data: category
        })
        
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
    }
}
getAllCategories = async (req,res) => {
    try {
        const listcategories = await Category.find({})

        res.status(201).json({
            message: "liste categries",
            data: listcategories
        })

    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }

}
getCategoryById = async (req,res) => {
    try {
        const categorie = await Category.findById({_id:req.params.id})

        res.status(201).json({
            message: "categorie find",
            data: categorie

        })
        
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }

}
getCategoryByName = async (req,res) => {
    try {
        const categorie = await Category.find({fullname: req.params.fullname})
        if (req.params.fullname !== categorie){
            res.status(406).json({message: "not found"})
        }
        
        res.status(201).json({
            message: "categorie trouvee",
            data: categorie
        })
   
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }
}
UpdateCategory = async (req,res) => {
    try {
     await Category.updateOne({_id:req.params.id},req.body);
        res.status(201).json({
            message: "categorie updated",
        })
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        })
    }

}
DeleteCategory = async (req,res) =>{
    try {
        await Category.deleteOne({_id:req.params.id});
        res.status(201).json({
            message: "categorie deleted"
        })
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        })
        
    }
}
module.exports = {CreateCategory,getAllCategories,getCategoryById,getCategoryByName,UpdateCategory,DeleteCategory}