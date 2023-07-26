const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
// userschema
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String
    },
    userName: String,
    picURL: {
        type: String,
        default: 'https://i.stack.imgur.com/l60Hf.png' 
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    facebookId:String,
    publicImageId:String
})
// func to hash the password at the signUp time 
if(this.password){
    userSchema.pre("save" , function(next) {
        this.password=bcrypt.hashSync(this.password, parseInt(process.env.SALTROUNDS));
         next();
    })
}


const userModel = mongoose.model('user', userSchema);

module.exports = userModel