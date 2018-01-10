// const MongoClient =  require('mongodb').MongoClient;
const {MongoClient, ObjectID} =  require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect', err)
  };
  console.log("Connected to MongoDB server!");

  // deleteMany
  // db.collection('Todos').deleteMany({name: 'Firm SRL'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // deleteOne and stops
  // db.collection('Todos').deleteOne({name: 'Company Inc'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({name: 'Company Inc'})
    .then((result) => {
      console.log(result);
    });
  // db.close();
});