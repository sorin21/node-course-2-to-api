// const MongoClient =  require('mongodb').MongoClient;
const {MongoClient, ObjectID} =  require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect', err)
  };
  console.log("Connected to MongoDB server!");
  
  // toArray() returns a promise
  /*db.collection('Todos').find({
    _id: new ObjectID('5a229aadfe5bd216dcd73469')
  }).toArray()
    .then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    })*/

    /*db.collection('Todos').find().count()
      .then((count) => {
        console.log(`Todos count: ${count}`);
      }, (err) => {
        console.log('Unable to fetch todos', err);
      })*/
    db.collection('Users').find({name: 'Mary'}).toArray()
      .then((docs) => {
        console.log(`Users`);
        console.log(JSON.stringify(docs, undefined, 2));
      }, (err) => {
        console.log('Unable to fetch todos', err);
      })
    db.close();
});