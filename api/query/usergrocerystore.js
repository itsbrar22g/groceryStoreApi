const Boom = require('boom');  

const User = require('../model/User');

const bcrypt = require('bcrypt');

const Grocerystore=require('../model/grocerystore');

function hashPassword(password, cb) {

	  bcrypt.genSalt(10, (err, salt) => {
	    bcrypt.hash(password, salt, (err, hash) => {
	      return cb(err, hash);
	    });
	  });
	}

module.exports ={ 
		
		verifyCredentials:function(req, reply) {
			
			const password = req.payload.password;

			  
			  User.findOne({
			    $or: [
			      { email: req.payload.email },
			      { username: req.payload.username }
			    ]
			  }, (err, user) => {
				  
				  console.log("+++++++");
			    if (user) {
			      bcrypt.compare(password, user.password, (err, isValid) => {
			        if (isValid) {
			        	delete user._id;
			        	delete user.password;
			        	delete user.__v;
			        	
			        	console.log("+++++++");
			        	
			        
			        	
			        	user.save((err, user) => {
			                if (err) {
			                  throw Boom.badRequest(err);
			                }
			                });
			        	
			        	 reply(user)
			        }
			        else {
			        	reply(Boom.badRequest('Incorrect password!'))
			        	
			         
			        }
			      });
			    }
			    else {
			    	reply(Boom.badRequest('Incorrect email!'))
			      
			    }
			    
			    
			  });
		},
		
		//------------------------------------
		//this is used to register
		//------------------------------------

		rigester :function (req, reply) {
			console.log("---------------->>>>");
			console.log(req.payload);
			console.log("--------------->>>>>>>");
			User.findOne({
				$or: [
					{ email: req.payload.email },
					{ username: req.payload.username },
					{mobileNumber:req.payload.mobileNumber}
					]
			}, (err, user) => {

				if(err){
					cb(err);
				}
				console.log("use---r");
				//console.log(user);
				if(user==null){
					
					
					hashPassword(req.payload.password, (err, hash) => {
						
						if(err){
							console.log(err);
						}else{
							req.payload.password=hash;
							
							User.create(req.payload, function (err, seved) {
								if (err) {
									reply(err)
									
								}else{

									reply (seved);
								}
								
							}) 	
							
						}
						
					});
					
					
				}else{
					if (user) {
						
						
					      if (user.username === req.payload.username) {
					    	 
					    	  reply({'username':'alredy exits'})
					      }
					      else if (user.email === req.payload.email) {
					    	 
					    	  reply({'email':'alredy exits'})
					      }
					      else if (user.mobileNumber === req.payload.mobileNumber) {
					   
					    	  reply({'mobile':'alredy exits'});
					    	  
						      }
					    }
				}
				
			});
		},
		
		

		addNew :function (req, reply) {
			console.log(req.payload);
			if(req.payload){
			Grocerystore.create(req.payload, function (err, seved) {
				console.log("-------------------");
				console.log(seved);
				if(err){
					reply(err)
				}else{
					reply(seved)
				}
				
			});
			}
		},
		
		listOfItems:function (req, reply) {
			console.log(req.payload);
			
			Grocerystore.find().exec(function(err,user){
				console.log("-------------------");
				console.log(user);
				if(err){
					reply(err)
				}else if(!user){
					reply("Sorry no items found!!!")
				}
				else{
					reply(user)
				}
				
			});
			
		},
	
		listOfApples:function (req, reply) {
     var query = req.query || "{}";
			
    console.log(query);
			
    Grocerystore.find(query).sort({'price':1}).exec(function(err,apple){
		console.log(apple);		
    	if(err){
					reply(err);
				}else if(!apple){
					reply("no data found");
				}else{
					reply(apple);
				}
			});
			
		},
		updateApple:function (req, reply) {
			var aid=req.params.aid|| "";
			console.log("aid----->>");
			console.log(aid);
			 Grocerystore.findOne({"_id":aid}).exec(function(err,apple){
				 console.log(apple);
				 if(err){
					 reply(err);
				 }else if(!apple){
					 reply("no data found");
				 }
				 else {
					 console.log(apple._id);
					 console.log(apple._id);
					 if(apple._id!=null){
					 Grocerystore.update({"_id":apple._id},req.payload,{upsert: true}).exec(function(err,store){
					    	if(err){
					    		
					    	}else if(!store){
					    		 reply("somthing went wrong").code(401);
					    	}else{
					    		reply(store);
					    	}
					    	
					    });

				 }
				 }
			 });
		},
		
		deleteApple:function (req, reply) {
			console.log(req.payload);
			var aid =req.params.aid || "";
			Grocerystore.remove({'_id':aid}).exec(function(err,store){
				console.log(store);
				if(err){
					reply(err)
				}else if(!store){
					reply("sothing wern wrong").code(401)
				}
				else{
					reply(store);
				}
				
			});
			
		},
		getItem:function (req, reply) {
			console.log(req.payload);
			var Iid =req.params.Iid || "";
			Grocerystore.findOne({'_id':Iid}).exec(function(err,store){
				console.log(store);
				if(err){
					reply(err)
				}else if(!store){
					reply("sothing wern wrong").code(401)
				}
				else{
					reply(store);
				}
				
			});
			
		},
		
		getApples:function (req, reply) {
			console.log(req.payload);
			var Iid =req.params.Iid || "";
			Grocerystore.find({"name":"Apple"}).sort({'price':1}).exec(function(err,store){
				console.log(store);
				if(err){
					reply(err)
				}else if(!store){
					reply("sothing wern wrong").code(401)
				}
				else{
					reply(store);
				}
				
			});
			
		},
}