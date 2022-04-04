const { connect } = require("mongoose");
const { success, error } = require("consola");

const DB = process.env.APP_DB;

const connectDB = async () => {
    try {
        await connect(DB);
        success({
            message: `succesfully connected with the database \n ${DB}`,
            badge: true
        })

    } catch (err) {
        error({
            message: `unable to connect to the database \n ${error}`,
            badge: true
        })

    }
}
module.exports = connectDB();


