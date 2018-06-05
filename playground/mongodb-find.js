// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect to mongo server');
    }
    console.log('Connected to mongodb');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b156d8f9973df2267c167f1')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('error unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);

    // }, (err) => {
    //     console.log('error unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Brooks'}).toArray().then((doc) => {
        console.log('users = ');
        console.log(JSON.stringify(doc, undefined, 2))

    }, (err) => {
        console.log('error unable to fetch todos', err);
    });
    // db.close();
});