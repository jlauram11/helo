const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const controllers = require('./controllers');

const {
    SERVER_PORT,
    DB_CONNECTION_STRING
} = process.env;

massive(DB_CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    }).catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(SERVER_PORT, console.log(`App is listening on port ${SERVER_PORT}`));