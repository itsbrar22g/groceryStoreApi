'use strict';

const Hapi = require('hapi');
const conection = require('./conection/mongo');

const register = require('./route/serverRoute');


const AuthBearer = require('hapi-auth-bearer-token');

const server = new Hapi.Server();  
server.connection({  
	 host: 'localhost',
	    port: 3004
});


server.register([AuthBearer,require('hapi-auth-jwt2'),require('./api/controller/grocerystorecontroller')], (err) => {
	
	  

});

// Start the server

server.start((err) => {
  if (err) {
    throw err;
  }
  
  console.log('Server running at:', server.info.uri);
  
  // Once started, connect to Mongo through Mongoose
  conection.mongoConnection;
 
});

