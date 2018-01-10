// const MongoClient =  require('mongodb').MongoClient;
// we use distructuring to get MongoClient, ObjectID 
// to get any property from mango lib
const {MongoClient, ObjectID} =  require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect(url, (err, db) => {
  // if (err) throw err;
  if (err) {
    // use return to exit if there are errors
    return console.log('Unable to connect', err)
  };
  console.log("Database created!");
  console.log("Connected to MongoDB!");


  const myobj = { name: "Firm SRL", address: "Elm Street 37" };

  const users = { name: "Dan", age: 23, location: "Romania" }

  db.collection('Todos').insertOne(myobj, (err, result) => {
    if(err) {
      return console.log('Unable to insert todo', err)
    }
    // ops store all documents
    console.log(JSON.stringify(result.ops, undefined, 2))
  });

  db.collection('Users').insertOne(users, (err, result) => {
    if(err) {
      return console.log('Unable to insert users', error)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
    // console.log(result.ops);
    console.log(result.ops[0]._id.getTimestamp());
  })
   db.close();
});