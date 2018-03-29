const express = require('express')
const bodyParser = require('body-parser')
 
// Create a new instance of express
const app = express()
app.use(bodyParser.json());
 
// Tell express to use the body-parser middleware and to not parse extended bodies
var urlencodedParser = bodyParser.urlencoded({ extended: true })
 
// Route that receives a POST request to /sms
app.post('/', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.end('ok');
})
 
// Tell our app to listen on port 3000
app.listen(3000, function (err) {
  if (err) {
    throw err
  }
 
  console.log('Server started on port 3000')
})