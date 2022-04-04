const Commentaire = require("../Models/Commentaire");
const Offre_emploi = require("../Models/offre_emploi");
CreateCommentaire = async (req,res) =>{
    try {
        const newcommentaire= new Commentaire(req.body);
        const commentaire = await Commentaire.create(newcommentaire);

        res.status(201).json({
            message: "commentaire cree",
            data: commentaire
        })
        
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
    }
}
getAllcommentaire = async (req,res) => {
    try {
        const listcommentaire = await Commentaire.find({}).populate('offre_emploi')

        res.status(201).json({
            message: "liste commentaire",
            data: listcommentaire
        })

    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }

}
module.exports = {CreateCommentaire,getAllcommentaire}