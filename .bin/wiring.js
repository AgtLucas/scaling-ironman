'use strict';

var templates = {
  'about/index': require('./views/about/index.js'),
  'home/index': require('./views/home/index.js'),
  'layout': require('./views/layout.js')
};

var controllers = {
  'about/index': require('../client/js/controllers/about/index.js'),
  'home/index': require('../client/js/controllers/home/index.js')
};

var routes = [
  {
    route: '/',
    action: 'home/index'
  },
  {
    route: '/about',
    action: 'about/index'
  }
];

module.exports = {
  templates: templates,
  controllers: controllers,
  routes: routes
};
