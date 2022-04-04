const User = require("../Models/User");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const { randomBytes } = require("crypto");
const Entreprise = require("../Models/Entreprise");
const { join } = require("path");
const DOMAIN = process.env.APP_DOMAIN;
const jwt = require("jsonwebtoken");
const Candidat = require("../Models/Candidat");
const SECRET = process.env.APP_SECRET;

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yassineslimi88@gmail.com",
    pass: "clubafricain",
  },
})

registreAdmin = async (req, res) => {
  try {
    const password = bcrypt.hashSync(req.body.password, 10);
    const newadmin = new User({ ...req.body, password, verified: true });
    const admin = await User.create(newadmin);
    res.status(201).json({
      status: 201,
      message: "admin create",
      data: admin
    })
  } catch (err) {
    return res.status(406).json({
      status: 406,
      message: err.message

    });

  }
},
registreentreprise2 = async (req, res) => {
    try {
      req.body['image'] = req.file.filename;
      const password = bcrypt.hashSync(req.body.password, 10)
  
      const newentreprise = new Entreprise({ ...req.body, password, verificationcode: randomBytes(6).toString("hex"),role:'Entreprise' });
      const entreprise = await Entreprise.create(newentreprise);
      res.status(201).json({
        message: "Hurry! your account is created verify you mail"
      })
      //  console.log(newclient.email)
      transporter.sendMail(
        {
          to: newentreprise.email,
          subject: 'Welcome ' + newentreprise.fullname,
          text: 'bonjour mr ',
          html: `<!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta http-equiv="x-ua-compatible" content="ie=edge">
              <title>Welcome Email</title>
            </head>
            <body>
              <h2>Hello ${newentreprise.fullname}! </h2>
              <p>We're glad to have you on board at ${newentreprise.email}. </p>
              <a href="${DOMAIN}Auth/verify-now/${newentreprise.verificationcode}">verify email</a>
  
            </body>
            </html>`,
          attachments: [
            {
              filename: req.file.filename,
              path: './storages/' + req.file.filename,
              cid: 'test',
            },
          ],
        },
        function (err, info) {
          if (err) {
            console.log('error : ', err);
          } else {
            console.log('Email sent : ', info.response);
          }
        }
      );
      
     
    } catch (err) {
      return res.status(406).json({
        message: err.message,
      });
    }
  
};
registrecandidat = async (req,res) => {
  try {
    
    req.body['image'] = req.file.filename;
    const password = bcrypt.hashSync(req.body.password, 10)
   
    const newcandidat = new Candidat({ 
      schoolLevel:
       req.body['schoolLevel'] = {
        name : req.body.name,
        year : req.body.year
      },
      email:req.body.email,
      fullname:req.body.fullname,
      cin:req.body.cin,
      image:req.file.filename,
      adresse:req.adresse,
      password,
     verificationcode: randomBytes(6).toString("hex"),
     role:'Candidat' });
    const candidat = await Candidat.create(newcandidat);
    res.status(201).json({
      message: "Hurry! your account is created verify you mail"
    })
    //  console.log(newclient.email)
    transporter.sendMail(
      {
        to: newcandidat.email,
        subject: 'Welcome ' + newcandidat.fullname,
        text: 'bonjour mr ',
        html: `<!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>Welcome Email</title>
          </head>
          <body>
            <h2>Hello ${newcandidat.fullname}! </h2>
            <p>We're glad to have you on board at ${newcandidat.email}. </p>
            <a href="${DOMAIN}Auth/verify-now/${newcandidat.verificationcode}">verify email</a>

          </body>
          </html>`,
          attachments: [
            {
              filename: req.file.filename,
              path: './storages/' + req.file.filename,
              cid: 'test',
            },
          ],

      },
      function (err, info) {
        if (err) {
          console.log('error : ', err);
        } else {
          console.log('Email sent : ', info.response);
        }
      }
    );
    
   
  } catch (err) {
    return res.status(406).json({
      message: err.message,
    });
  }

};
verifyemail = async (req, res) => {
    try {
      const { verificationcode } = req.params;
      const user = await User.findOne({ verificationcode, });
      if (!user) {
        return res.status(401).json({
          status: 401,
          message: 'unanthorized access,invalid verification code',
        });
      }
      user.verified = true;
      user.verificationcode = undefined;
      user.save();
      return res.sendFile(
        join(__dirname,'../Templates/success.html')
      );
    } catch (error) {
      return join(__dirname, '../Templates/error.html');
    }
};
login = async function(req, res){
  try{
    const{email,password} = req.body;
    const user = await User.findOne({email});
    if (!user){
      return res.status(404).json({status: 404,message:'email not found!'});
    }
    if (user.verified===true){
      const passwordCompare = bcrypt.compareSync(password, user.password);
      if(!passwordCompare){
        return res.status(404).json({status: 404,message:'password incorrect'});
      }
      const token = jwt.sign({
        id: user._id,
        user: user,
      },
      SECRET,
      {expiresIn: '7days'}
      );
      const resultat = {
        email: user.email,
        token: token,
        expiresIn: 1,
      };
      return res.status(200).json({
        ...resultat,
        message: 'hurray! you are now logged in.',
        success: true,
      });
    }else{
      return res.status(200).json({
        message: 'you are not verified',
        success: false,
      })
    }
   } catch (error){
      res.status(404).json({status: 404,message: error.message}); 
  }
}
profile = async function (req,res) {
  try {
    const user = req.user;
    return res.status(201).json({user: user});
    
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
}
updateProfile = async function (req,res){
  try {
    await User.updateOne({_id: req.user._id}, req.body);
    return res.status(201).json({message: 'user update'});
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
};
  

module.exports = { registreAdmin,verifyemail,registreentreprise2,registrecandidat ,login,profile,updateProfile};