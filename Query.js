use('database-name');

// 1 Create a new collection
db.createCollection('myCollection');

// 2 Remove a collection from the database
db.myCollection.drop();

// 3 Inserts a single document into a collection
db.myCollection.insertOne({
   data: 'value',
   // Add more fields and values as needed
});

// 4 Delete/remove a single document from the collection
db.mycollection.deleteOne({
   name: 'Mohammad Bokul',
});
