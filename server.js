const express = require("express");
const cors = require("cors");
require("dotenv").config(); //pour utiliser .env
const { success, error } = require("consola");

const db = require("./Config/db");
const PORT = process.env.APP_PORT;
const DOMAIN = process.env.APP_DOMAIN;
const passport = require("passport");

const registerUser = require("./Routes/authRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());

app.use("/", registerUser);

app.listen(PORT, async () => {
  try {
    success({
      message:
        `Server started on PORT : ${PORT}` + `URL : http://localhost:${PORT}`,
      badge: true,
    });
  } catch (err) {
    error({
      message: "Error with server" + err.message,
      badge: true,
    });
  }
});
