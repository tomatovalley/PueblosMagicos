const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.userSchema({
	local: {
		name:String,
		username:String,
		email:String,
		password:String
	}
});

userSchema.methods.generateHash = funtion (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validatePassword = funtion (password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('Users', userSchema);