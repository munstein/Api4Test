'use strict';
module.exports = function(app) {
  var apiCore = require('../controllers/MainController');

  // todoList Routes
  app.route('/')
    .get(apiCore.get_all)
    .post(apiCore.post);


  app.route('/:id')
    .get(apiCore.get)
    .put(apiCore.update)
    .delete(apiCore.delete);
};
