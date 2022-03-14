const User = require("../Models/User");

const bcrypt = require("bcrypt");
const { randomBytes } = require("crypto");
const { join } = require("path");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const DOMAIN = process.env.APP_DOMAIN;
const SECRET = process.env.APP_SECRET;

const transporteur = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.APP_USER, pass: process.env.APP_PASS },
});

const registerAdmin = async (req, res) => {
  try {
    const password = bcrypt.hashSync(req.body.password, 10);
    const newAdmin = new User({
      email: req.body.email,
      password: password,
      role: "admin",
      confirmed: true,
    });
    const admin = await User.create(newAdmin);
    res.status(201).json({
      message: "Your account is created",
      data: admin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    req.body["picture"] = req.file.filename;
    const password = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password,
    });
    const user = await User.create(newUser);
    res.status(201).json({
      message: "Your account is created",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(500).json({ message: "Invalid Email" });
    }
    const valid = await bcrypt.compareSync(req.body.password, user.password);
    if (!valid) {
      return res.status(500).json({ message: "Password False" });
    }
    if (user.confirmed === false) {
      res.status(500).json({ message: "Your Account Is Not Confirmed" });
    } else {
      const token = jwt.sign({ id: user._id, user: user }, SECRET, {
        expiresIn: "24h",
      });
      const result = {
        Email: user.email,
        User: user,
        Token: token,
        ExpiresIn: 1,
      };
      res.status(200).json({ message: user.name + " is logged", ...result });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};

const profil = async (req, res) => {
  try {
    const user = await req.user;
    res.status(200).json({ message: "Profil identify", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const confirmedUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.iduser });
    if (!user) {
      res.status(500).json({ message: "User indifiened" });
    }
    user.confirmed = true;
    await user.save();
    res.status(200).json({ message: "User Confirmed", data: user });
    transporteur.sendMail(
      {
        to: user.email,
        subject: "Welcome " + user.name,
        text: "Bonjour ",
        html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome Email</title>
            </head>
            <body>
                <h2>Hello ${user.name}</h2>
                <p>We are glad to have you on bord at ${user.email}</p>
                <a href="">Thank you for joining our platforme</a>
            </body>
            </html>`,
      },

      function (err, info) {
        if (err) {
          console.log("error : " + err.message);
        } else {
          console.log("email send : " + info.res);
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { registerAdmin, register, login, profil, confirmedUser };