// const MongoClient =  require('mongodb').MongoClient;
const {MongoClient, ObjectID} =  require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect(url, (err, db) => {
  // if (err) throw err;
  if (err) {
    return console.log('Unable to connect', err)
  };
  console.log("Database created!");
  const myobj = { name: "Company Inc", address: "Highway 37" };

  const users = { name: "John", age: 27, location: "USA" }
  db.collection('Todos').insertOne(myobj, (err, result) => {
    if(err) {
      return console.log('Unable to insert todo', err)
    }
    // ops store all documents
    console.log(JSON.stringify(result.ops, undefined, 2))
  })
  db.collection('Users').insertOne(users, (err, result) => {
    if(err) {
      return console.log('Unable to insert users', error)
    }
    // console.log(JSON.stringify(result.ops, undefined, 2))
    // console.log(result.ops);
    console.log(result.ops[0]._id.getTimestamp());
  })
   db.close();
});