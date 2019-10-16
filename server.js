const express = require('express');
const db = require('./config/db');
const path = require('path');
const PORT = process.env.PORT || 5000;
const collection = 'elements'; //name of table
//initialize application
const app = express();

// Connect Database
db.connect(err => {
  // If err unable to connect to database
  // End application
  if (err) {
    console.log('unable to connect to database');
    process.exit(1);
  }
  // Successfully connected to database
  // Start up our Express Application
  // And listen for Request
  else {
    console.log('MongoDb Connected');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  }
});

// read
app.get('/data', (req, res) => {
  //get all elements
  db.getDB()
    .collection(collection)
    .find({})
    .toArray((err, documents) => {
      if (err) console.log(err);
      else {
        res.json(documents);
      }
    });
});
//get data for a particular user
// app.get('/data/:name', (req, res) => {
//   //get all elements
//   db.getDB()
//     .collection(collection)
//     .find({ name: req.params.name })
//     .toArray((err, documents) => {
//       if (err) console.log(err);
//       else {
//         res.json(documents);
//         console.log(res.json(documents));
//       }
//     });
// });
