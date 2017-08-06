// config.js

//const key = 'secretkey';


var dotenv = require('dotenv').config({silent: true},{encoding: 'base64'},{path: './env'});

module.exports ={
		key:'secretkey',
		dbUrl:"mongodb://"+process.env.DB_USER+":"+process.env.DB_PASS+""+process.env.DB_CLUSTER1+","+process.env.DB_CLUSTER2+","+process.env.DB_CLUSTER3+"/"+process.env.DB_NAME+"?"+process.env.ADMIN+""

} 
	
	