const { connect } = require("mongoose");
const { success, error } = require("consola");

const DB = process.env.APP_DB;

const connectdb = async () => {
  try {
    await connect(DB);
    success({
      message: `Successfully connected with the data base \n${DB}`,
      badge: true,
    });
  } catch (err) {
    error({
      message: `Unable to connect with database \n${err}`,
      dabge: true,
    });
    connectdb();
  }
};

module.exports = connectdb();
