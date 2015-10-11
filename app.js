var express = require('express'),
  path = require('path'),
  app = express();

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/', function (req, res) {
  res.render('index', {title: 'Timebook'})
});

app.get('/amount', function (req, res) {
  var high = 10, low = 0;
  res.json(Math.floor(Math.random() * (high - low + 1) + low))
});

app.listen(3000);