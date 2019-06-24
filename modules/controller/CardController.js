var cardDAO = require('../dao/CardDAO');
var session = require('express-session');

module.exports = {

    bindView: function (app) {
        app.use(session({
            secret: 'secret',
            resave: true,
            saveUninitialized: true
        }));

        app.get('/card', function (req, res) {

            preparePage(function (result) {
                if (req.session.loggedin)
                    res.render('card', { 'result': result });
                else res.render('login');
            });

        })
    }

};

var preparePage = function (callback) {

    var cards = cardDAO.getAllCards(function (result) {

        callback(result);
    });

}