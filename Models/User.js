const mongoose = require ("mongoose");
const schemauser = new mongoose.Schema({
    // fullname:{
    //     type : String,
    //     minlength:4,
    //     required:true,
    //     trim:true,
    // },
    email:{
        type:String,
        unique:true,
        required:true,

      
    },
    password:{
        type: String,
        required: true,
    },
  
     phone:{
         type: String,
         minlength:8,
         required: false,
     },
    verified:{
        type:Boolean,
        default:false,
    },
    verificationcode:{
        type:String,
    },
    role:{
        type:String,
        default: 'User',
        enum: ["Admin","User","Entreprise","Candidat"]

    },
},
{timestamps:true} 
);
module.exports = mongoose.model("User",schemauser);