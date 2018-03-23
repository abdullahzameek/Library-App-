const express = require('express') // import momdule
var path = require('path');
// var listMaker = require('./Public/MainScreen.js');

let app = express()
let port = 3636
app.use(express.static(__dirname + '/Public'));




app.listen(port, () => {
  console.log('Room list')
})


app.get('/roomlist', function(request, response, error) {

  response.sendFile(path.join(__dirname + '/View/MainScreen.html'))
  // response.send('<b>hey</b>');
  //response.send();
})
