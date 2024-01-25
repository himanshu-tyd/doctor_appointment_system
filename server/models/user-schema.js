const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    phone:{
        require:true,
        type:Number
    },
    work:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    },
    cpassword:{
        require:true,
        type:String
    }
})

const User=mongoose.model('USERS',userSchema);
module.exports=User;