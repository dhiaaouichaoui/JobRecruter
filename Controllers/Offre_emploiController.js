const Candidat = require("../Models/Candidat");
const Offre_emploi = require("../Models/offre_emploi");
CreateOffre_emploi = async (req,res) =>{
    try {
        const newoffre_emploi = new Offre_emploi(req.body);
        const offre_emploi = await Offre_emploi.create(newoffre_emploi);

        res.status(201).json({
            message: "offre emploi create",
            data: offre_emploi
        })
        
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
    }
}
getAlloffres = async (req,res) => {
    try {
        const listoffres = await Offre_emploi.find({}).populate('category') 

        res.status(201).json({
            message: "liste offres emplois",
            data: listoffres
        })

    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }

}
getOffreById = async (req,res) => {
    try {
        const offre_emploi = await Offre_emploi.findById({_id:req.params.id})

        res.status(201).json({
            message: "Offre cherché",
            data: offre_emploi

        })
        
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }

}
getOffreByName = async (req,res) => {
    try {
        const offre_emploi = await Offre_emploi.find({titre:req.query.titre})
        if (req.titre !== req.query.titre){
            res.status(406).json({message: "not found"})
        }
        else{
        res.status(201).json({
            message: "offre trouvee",
            data: offre_emploi
        })
    }
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }
}
UpdateOffre = async (req,res) => {
    try {
     await Offre_emploi.updateOne({_id:req.params.id},req.body);
        res.status(201).json({
            message: "offre updated",
        })
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        })
    }

}
DeleteOffre = async (req,res) =>{
    try {
        await Offre_emploi.deleteOne({_id:req.params.id});
        res.status(201).json({
            message: "offre deleted"
        })
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        })
        
    }
}
pushcandidat = async (req,res) =>{
    Offre_emploi.updateOne({_id:req.params.id},{$push: { id_candidat: req.body.id_candidat} },
        function (err,offre){
            if (err){
                res.json({ message:'error', status:406 , data:null});
            }
            else{
                res.json({ message:'offre emploi  is pushed' , status:201 , data:offre})
            }
        }
        )
},
pullcandidat = async (req,res) =>{
    Candidat.updateOne({_id:req.params.id},{$pull: { id_candidat: req.body.id_candidat} },
        function (err,order){
            if (err){
                res.json({ message:'error', status:406 , data:null});
            }
            else{
                res.json({ message:'offre emploi is pulled' , status:201 , data:Candidat})
            }
        }
        )
},
module.exports = {CreateOffre_emploi,getAlloffres,getOffreById,UpdateOffre,DeleteOffre,pullcandidat,pushcandidat}