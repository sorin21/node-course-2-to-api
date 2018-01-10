// const MongoClient =  require('mongodb').MongoClient;
const {MongoClient, ObjectID} =  require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect', err)
  };
  console.log("Connected to MongoDB server!");

  db.collection('Todos').findOneAndUpdate(
    {
      // filter
      _id: new ObjectID('5a32e7cc7bfdce1070c7a7f2')
    },
    {
      // mongodb update operators
      $set: {
        name: 'No More Company'
      }
    },
    {
      // options: return the original document
      // not the updated one so we put false
      returnOriginal: false
    })
    .then((result) => {
      console.log(result);
    })

  db.collection('Users').findOneAndUpdate(
    {
      // filter
      _id: new ObjectID('5a32e75ddbcaca16ec0a6bd5')
    },
    {
      // mongodb update operators
      $set: {
        name: 'Cezara'
      },
      $inc: {
        age: +3
      }
    },
    {
      // options: return the original document
      // not the updated one so we put false
      returnOriginal: false
    })
    .then((result) => {
      console.log(result);
    })

  // db.close();
});