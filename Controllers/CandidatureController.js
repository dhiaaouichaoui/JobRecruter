const Candidature = require("../Models/Candidature")
CreateCandidature = async (req,res) =>{
    try {
        const newcandidature = new Candidature(req.body);
        const candidature = await Candidature.create(newcandidature);

        res.status(201).json({
            message: "candidature create",
            data: candidature
        })
        
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
    }
}
getAllCandidature = async (req,res) => {
    try {
        const listcandidature = await Candidature.find({})

        res.status(201).json({
            message: "list candidature",
            data: listcandidature
        })

    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }

}
getCandidatureById = async (req,res) => {
    try {
        const candidature = await Candidature.findById({_id:req.params.id})

        res.status(201).json({
            message: "candidature trouvé",
            data: candidature

        })
        
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }

}
UpdateCandidature = async (req,res) => {
    try {
     await Candidature.updateOne({_id:req.params.id},req.body);
        res.status(201).json({
            message: "candidature updated",
        })
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        })
    }

}
DeleteCandidature = async (req,res) =>{
    try {
        await Candidature.deleteOne({_id:req.params.id});
        res.status(201).json({
            message: "candidature deleted"
        })
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        })
        
    }
}
module.exports = {CreateCandidature,getAllCandidature,getCandidatureById,UpdateCandidature,DeleteCandidature}