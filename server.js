const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use(express.static('views/resources'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

var loginPage = require('./modules/controller/LoginController');
var mainPage = require('./modules/controller/MainController');
var cardPage = require('./modules/controller/CardController');
var reportPage = require('./modules/controller/ReportController');
var auth = require('./modules/controller/AuthController');
//var main1Page = require('./modules/controller/Main1Controller');

loginPage.bindView(app);
mainPage.bindView(app);
cardPage.bindView(app);
reportPage.bindView(app);
auth.bindView(app);
//main1Page.bindView(app);


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
