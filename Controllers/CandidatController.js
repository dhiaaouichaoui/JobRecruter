const Candidat = require ("../Models/Candidat");
const offre_emploi = require("../Models/offre_emploi");

getAllCandidat = async (req,res) => {
    try {
        const listcandidats = await Candidat.find({});

        res.status(201).json({
            message: "liste candidat",
            data: listcandidats
        })
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }
}
getCandidatByName = async (req,res) => {
    try {
        const candidat = await Candidat.find({fullname:req.query.fullname});
        res.status(201).json({
            message: "",
            data : candidat
        })
    } catch (error) {
        return res.status(406).json({
            message:error.message,
        })
    }
 
}
UpdateCandidat = async (req,res) => {
    try {
        await Candidat.updateOne({_id:req.params.id},req.body);
        res.status(201).json({
            message: "candidat updated",
        })
        
    } catch (error) {
        return res.status(406).json({
            message:error.message,
        })
    }
}


module.exports = {getAllCandidat,getCandidatByName,UpdateCandidat};