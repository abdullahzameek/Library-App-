const express = require('express') // import momdule
var cors = require('cors')
var path = require('path');
// var listMaker = require('./Public/MainScreen.js');

let app = express()
app.use(cors())
let port = 3636
app.use(express.static(__dirname + '/Public'));

var list = [410, 2, 3];

app.listen(port, () => {
  console.log('Room list')
})


app.get('/roomlist', function(request, response, error) {
  response.sendFile(path.join(__dirname + '/View/MainScreen.html'))
})

app.get('/camera', function(request, response, error) {
  response.sendFile(path.join(__dirname + '/View/webapp.html'))
})

app.get('/411', function(request, response, error) {
    list.push(411);
    response.sendFile(path.join(__dirname + '/View/MainScreen.html'))
})

app.get(`/room/:number`, function(request, response, error) {
  console.log('hi hi hi');
  let num = parseInt(request.params.number);
  if (list.includes(num)) {
    var index = list.indexOf(num);
    list.splice(index, 1);
  } else {
    list.push(num);
  }
  console.log(num, list);

  response.redirect('/roomlist');
})

app.get('/data', function(request, response, error) {
  response.send(JSON.stringify(list));
})
