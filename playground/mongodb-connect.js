 const MongoClient = require('mongodb').MongoClient;

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err) {
         return console.log('unable to connect to mongo server');
     }
     console.log('Connected to mongodb');

    //  db.collection('Todos').insertOne({
    //      text: 'Something to do',
    //      completed: false
    //  }, (err, result) => {
    //      if (err) {
    //          return console.log('unable to insert todo ', err);
    //         }
    //      console.log(JSON.stringify(result.ops, undefined, 2));
    //  });

    db.collection('Users').insertOne({
        name: 'Brooks',
        age: '30',
        location: 'CT'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
     db.close();
 });