const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const animalRouter = require('./routes/animal.route');

app.use('/animals', animalRouter);

app.listen(PORT, (error) => {
  if (!error)
    console.log("App is listening on port " + PORT)
  else {
    console.log("Error occurred, server can't start", error);
  }
});
