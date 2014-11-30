'use strict';

var templates = {
  'home/index': require('./views/home/index.js'),
  'layout': require('./views/layout.js')
};

var controllers = {
};

var routes = [
  {
    route: '/',
    action: 'home/index'
  }
];

module.exports = {
  templates: templates,
  controllers: controllers,
  routes: routes
};
