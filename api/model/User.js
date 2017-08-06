

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//##############################################################################
// using mongoose we are creating user collection in mongo db with set of rules
//#############################################################################
const userModel = new Schema({
  email: { type: String, required: true, index: { unique: true } },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  mobileNumber:{ type: String, required: false },
  admin: { type: Boolean, required: false }
  
});




module.exports = mongoose.model('User', userModel);