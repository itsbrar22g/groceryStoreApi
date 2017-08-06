const mongoose = require('mongoose');
const secret = require('../config/constant');


module.exports ={
		

   mongoConnection:mongoose.connect(secret.dbUrl, {db: { native_parser: true }}, (err) => {
    if (err) {
      throw err;
    }
  })

}