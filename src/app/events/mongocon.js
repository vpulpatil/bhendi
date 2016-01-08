
// import the mongodb

    var mongodb=require('mongodb');
    
// create mongo client 

    var MongoClient=mongodb.MongoClient;

// Connection url 
    
    var URL='mongodb://localhost:27017/raj_drone';
    
// connect to server 

    MongoClient.connect(URL,function(err,db){
            if(err)
            {
                console.log('Unable to connect to mongodb....',err);
            }
            else
            {
                console.log('Connection established.......',URL);  
                
                //work with database 
                

                db.close();
            }
            });
