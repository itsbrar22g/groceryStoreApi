# groceryStoreApi
Team Members
Deepika Boparai
Ashwin Vishwanath
Pushpinder Singh Brar

Functionality of the app



●	Add new item:  
  
            Example URL :  http://localhost:3004/Items/addNew

            Method : POST

           Route URL : /Items/addNew

          Example data:      {
                                   "name":"Apple",
			"price": 220,
			"dateOfPrice":"21-30-1998",
			"nameOfGroceryStore":"joomo",
			"beastDeals":{
				"items": {
                             "food":["whole foods", "fuji", "2.99each", "june 2017"],
                              "choice":["choices", "pink lady", "1.99each", "July 2017"] 
                          }
            },
			"comments":"nodeals"
}


●	List of items:
          
             Example URL : http://localhost:3004/listOfItems

             Method : GET 

             Route URL :  /listOfItems
  
 
●	  List all the “apples” with sorting order  based on price. We have used two types to get the list :
1.	Query
2.	Without Query

 Query :

         Example URL :  http://localhost:3004/Items/apples?name=Apple
           Method : GET
           Routing URL :/Items/apples

Without Query:  

             Example URL : http://localhost:3004/item/Apple
 
             Method : GET
             Routing URL :/Items/Apple

●	Update item:

       
            Example URL : http://localhost:3004/update/5986ee1acd3cfe5742d0eac7


          5986ee1acd3cfe5742d0eac7  this is item id

            Method : PUT, PATCH

            Routing URL : /update/{aid}

Example data:    {
  "name":"Apple",
			"price": 900,
			"dateOfPrice":"21-30-1998",
			"nameOfGroceryStore":"joomo",
			"beastDeals":{
				"items": {
                             "food":["whole foods", "fuji", "2.99each", "june 2017"],
                              "choice":["choices", "pink lady", "1.99each", "July 2017"] 
                          }
            },
			"comments":"nodeals"
}

●	Delete Item:

            Example URL :  http://localhost:3004/itemDelete/5986ee1acd3cfe5742d0eac7

            5986ee1acd3cfe5742d0eac7 this is item id

            Method : DELETE
Route URL : /itemDelete/{aid}

●	Get individual item:

       Example URL : http://localhost:3004/item/5986e494bb397853b43254d8

       5986e494bb397853b43254d8 this is example id of item.

       Method : GET 

       Route URL : /item/{Iid}

.ENV File:

.env file is used for securing the db url of cluster db of mongo. It contains

DB_USER
DB_PASS
DB_NAME
DB_CLUSTER1
DB_CLUSTER2
DB_CLUSTER3
ADMIN








