const express = require("express");
const cors = require ("cors");
const { success , error} = require ("consola");
require("dotenv").config();
const DB = require("./Config/database");

const PORT = process.env.APP_PORT || 3000;
const passport = require('passport');

const app = express();

app.use (cors());
app.use(express.json());
app.use (express.urlencoded({ extended : false}));


const authroute = require('./Routes/authroute');
const categoryroute = require('./Routes/categoryroute');
const candidatroute = require('./Routes/candidatroute');
const offre_emploiroute = require('./Routes/offre_emploiroute');
const candidatureroute = require('./Routes/candidatureroute');
const commentaireroute = require('./Routes/commentaireroute');
const entretienroute = require('./Routes/entretienroute');
app.use('/Auth',authroute);
app.use('/category',categoryroute);
app.use('/candidat',candidatroute);
app.use('/offre_emploi',offre_emploiroute);
app.use('/candidature',candidatureroute);
app.use('/commentaire',commentaireroute);
app.use('/entretien',entretienroute);
app.listen(PORT,async() =>{
    try {
        success({
            message: `Server started on PORT ${PORT}\n` + `URL: http://localhost: ${PORT}`,
            badge: true,
        });
    } catch (err) {
        error({
            message: "erreur with serveur",
            badge: true,
        });
    }
});

