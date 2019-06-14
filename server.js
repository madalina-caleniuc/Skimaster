const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use(express.static('views/resources'));
app.use(bodyParser.urlencoded({ extended: true }));

var loginPage = require('./modules/controller/LoginController');
var mainPage = require('./modules/controller/MainController');
var cardPage = require('./modules/controller/CardController');
var resetPassPage = require('./modules/controller/ResetPassController');

loginPage.bindView(app);
mainPage.bindView(app);
cardPage.bindView(app);
resetPassPage.bindView(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
