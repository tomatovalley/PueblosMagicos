const express = require('express');
const config = require('./server/config');
const passport = require('passport');

const app = config(express());
require('./database');
let twitter = require('./twitter');

twitter();

process.setMaxListeners(Infinity);

app .listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
}) 