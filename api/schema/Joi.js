const Joi = require('joi');

module.exports ={
		
      loginValidate:Joi.object({

			email:Joi.string().email().required(),
			password: Joi.string().alphanum().required().regex(/[a-zA-Z0-9]/).trim()

		}),
		
		rigesterValidate:Joi.object({

			username: Joi.string().min(4).max(15).regex(/[a-zA-Z]/).required(),
			password: Joi.string().alphanum().regex(/[a-bA-Z0-9]/).required(),
			email:Joi.string().email().required(),
			mobileNumber:Joi.string().min(10).max(10).required()

		}),
		groceryStroreValidation:Joi.object({

			name: Joi.string().min(4).max(15).regex(/[a-zA-Z]/).required(),
			price: Joi.number().integer().required(),
			dateOfPrice:Joi.string().trim().min(9).max(11).required(),
			nameOfGroceryStore:Joi.string().min(3).required(),
			beastDeals:Joi.object().keys({
				items: Joi.any()
				
			}),
			comments:Joi.any().required()

		})
		
}