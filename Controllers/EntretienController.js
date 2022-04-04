const Entretien = require("../Models/Entretien");

CreateEntretien = async (req,res) =>{
    try {
        const newentretien= new Entretien(req.body);
        const entretien = await Entretien.create(newentretien);

        res.status(201).json({
            message: "entretien cree",
            data: entretien
        })
        
    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
    }
}
getAllEntretien = async (req,res) => {
    try {
        const listentretien = await Entretien.find({}).populate('candidat').populate('entreprise')

        res.status(201).json({
            message: "liste entretien",
            data: listentretien
        })

    } catch (error) {
        return res.status(406).json({
            message: error.message,
        });
        
    }

}
module.exports = {CreateEntretien,getAllEntretien}