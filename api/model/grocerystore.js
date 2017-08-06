

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//##############################################################################
// using mongoose we are creating user collection in mongo db with set of rules
//#############################################################################
const groceryStoreModel = new Schema({
	
	
	name: { type: String, required: true},
	price:{ type: Number, required: true},
	dateOfPrice:{type: String, required: true},
	nameOfGroceryStore:{ type: String, required: true},
	beastDeals:{ type: Object, required: true}
	
});





module.exports = mongoose.model('Grocerystore', groceryStoreModel);