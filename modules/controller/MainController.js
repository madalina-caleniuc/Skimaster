var clientDAO = require('../dao/ClientDAO');
var session = require('express-session');

module.exports = {

    bindView: function (app) {
        app.use(session({
            secret: 'secret',
            resave: true,
            saveUninitialized: true
        }));

        app.get('/main', function (req, res) {

            preparePage(function (result) {
                if (req.session.loggedin)
                    res.render('main', { 'result': result });
                else res.render('login');

            });

        })
    }

};

var preparePage = function (callback) {

    var clients = clientDAO.getAllClients(function (result) {

        callback(result);
    });

}