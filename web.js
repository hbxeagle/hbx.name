var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dist'));
app.get('/', function(request, response) {
  var result = '';
  var times = 5;
  for (i=0; i< times; i++) {
    result += '--|';
  }
  response.send(result);
});
