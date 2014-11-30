'use strict';

var taunus = require('taunus');
var taunusExpress = require('taunus-express');
var express = require('express');
var serverStatic = require('serve-static');
var app = express();
var options = {
  routes: require('./controllers/routes'),
  layout: require('./.bin/views/layout')
};

app.use(serverStatic('.bin/public'));
taunusExpress(taunus, app, options);
app.listen(3200);