var reportDAO = require('../dao/ReportDAO');
var session = require('express-session');

module.exports = {

    bindView: function (app) {
        app.use(session({
            secret: 'secret',
            resave: true,
            saveUninitialized: true
        }));

        app.get('/report', function (req, res) {

            preparePage(function (result) {
                if (req.session.loggedin)
                    res.render('report', { 'result': result });
                else res.render('login');
            });

        })
    }

};

var preparePage = function (callback) {

    var reports = reportDAO.getAllReports(function (result) {

        callback(result);
    });
};