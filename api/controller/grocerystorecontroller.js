

const user = require('../query/usergrocerystore.js');

const Joi = require('../schema/Joi.js');






exports.register = function(server,options,next) {
	
	
	 //###############################
	 // This is the login for user
	 //###############################
	server.route({
		method: 'POST',
		path: '/login',
		config: {
			
			
			handler: (request, reply) => {
				console.log(request.payload.username);
				console.log(request.payload.password);
				
				user.verifyCredentials(request,reply);
				//reply({ id_token: createToken(request.pre.user) }).code(201);
				//reply({'login successful...':'and made hapi'});
			},
			validate: {
				
				payload: Joi.loginValidate
			}
			 
		}
	});
	
	
	//########################################
	//register with out auth
	//##########################################

	server.route({
		method: 'POST',
		path: '/register',
		config: {
			handler: (request, reply) => {
				console.log(request.payload.username);
				console.log(request.payload.password);
				user.rigester(request,reply);
				//reply({'you registerd successful...':'and made hapi'});
			},
			validate: {
				payload: Joi.rigesterValidate
			}
		}
	});

	
//----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------
//simple CRUD API that would allow a user to keep track of Deals 
//	at a grocery store
//-----------------------------------------------------------------------------------------------------------------------------------------------	
	
//---------------------------
//method : POST
//function: adds a new item
//---------------------------
	
	server.route({
		method: 'POST',
		path: '/Items/addNew',
		config: {
			handler: (request, reply) => {
				//console.log(request.payload.username);
				//console.log(request.payload.password);
				user.addNew(request,reply);
				//reply({'you registerd successful...':'and made hapi'});
			},
			validate: {
				payload: Joi.groceryStroreValidation
			}
		}
	});

	
	//---------------------------
	//method : GET
	//function: returns a list of all items in database 
	//---------------------------
		
		server.route({
			method: 'GET',
			path: '/listOfItems',
			config: {
				handler: (request, reply) => {
					//console.log(request.payload.username);
					//console.log(request.payload.password);
					user.listOfItems(request,reply);
					//reply({'you registerd successful...':'and made hapi'});
				}
			}
		});

		
		//--------------------------------------------------------------
		//method : GET
		//function: returns a list of all apples using query in database 
		//--------------------------------------------------------------
			
			server.route({
				method: 'GET',
				path: '/Items/apples',
				config: {
					handler: (request, reply) => {
						//console.log(request.payload.username);
						//console.log(request.payload.password);
						user.listOfApples(request,reply);
						//reply({'you registerd successful...':'and made hapi'});
					}
				}
			});

			
		
			
			//--------------------------------------------------------------
			//method : GET
			//function: returns a list of all apples using query in database 
			//--------------------------------------------------------------
				
				server.route({
					method: ['PUT','PATCH'],
					path: '/update/{aid}',
					config: {
						handler: (request, reply) => {
							//console.log(request.payload.username);
							//console.log(request.payload.password);
							user.updateApple(request,reply);
							//reply({'you registerd successful...':'and made hapi'});
						},
						validate: {
							payload: Joi.groceryStroreValidation
						}
					}
				});

				
				
				//--------------------------------------------------------------
				//method : DELETE
				//function: delete the item database 
				//--------------------------------------------------------------
					
					server.route({
						method: ['DELETE'],
						path: '/itemDelete/{aid}',
						config: {
							handler: (request, reply) => {
								//console.log(request.payload.username);
								//console.log(request.payload.password);
								user.deleteApple(request,reply);
								//reply({'you registerd successful...':'and made hapi'});
							}
						}
					});
					
					
					//--------------------------------------------------------------
					//method : GET
					//function: get individual item item database 
					//--------------------------------------------------------------
						
						server.route({
							method: ['GET'],
							path: '/item/{Iid}',
							config: {
								handler: (request, reply) => {
									//console.log(request.payload.username);
									//console.log(request.payload.password);
									user.getItem(request,reply);
									//reply({'you registerd successful...':'and made hapi'});
								}
							}
						});
						
						
						//--------------------------------------------------------------
						//method : GET
						//function: get list of only apples with descending order 
						//--------------------------------------------------------------
							
							server.route({
								method: ['GET'],
								path: '/item/Apple',
								config: {
									handler: (request, reply) => {
										//console.log(request.payload.username);
										//console.log(request.payload.password);
										user.getApples(request,reply);
										//reply({'you registered successful...':'and made hapi'});
									}
								}
							});

					
				
	
	
	return next();
}



exports.register.attributes = {  
		name: 'usercontroller'
};