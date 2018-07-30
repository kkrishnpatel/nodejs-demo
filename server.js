require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use('/users',require('./routes/usersRoutes'));
app.use('/todos',require('./routes/todoRoutes'));

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
