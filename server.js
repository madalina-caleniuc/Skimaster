const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use(express.static('views/resources'));
app.use(bodyParser.urlencoded({ extended: true }));

var loginPage = require('./modules/controller/LoginController');
var mainPage = require('./modules/controller/MainController');

loginPage.bindView(app);
mainPage.bindView(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
