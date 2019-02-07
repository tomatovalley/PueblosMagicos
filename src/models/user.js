const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = new Schema({
    username:{ type: String, required: true },
    email:{ type: String,  required : true },
    password: { type: String, required:true },
    timestamp: { type: Date, default: Date.now }

})

userSchema.methods.hashPassword = function (password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function (password) {
    //if(this.password != null) {
    return bcrypt.compareSync(password, this.password);
    /*} else {
        return false;
    }*/
}

module.exports = mongoose.model('User',userSchema);