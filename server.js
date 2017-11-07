var express = require('express'),
  app = express(),
  port = process.env.PORT || 80
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./api/routes/MainRoutes'); //importing route
routes(app);

app.listen(port);
