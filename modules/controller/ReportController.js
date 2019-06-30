var reportDAO = require('../dao/ReportDAO');
var session = require('express-session');
const bodyParser = require('body-parser');


module.exports = {

    bindView: function(app) {
        app.use(session({
            secret: 'secret',
            resave: true,
            saveUninitialized: true
        }));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.get('/lista_rapoarte', function(req, res) {

            preparePage(function(result) {
                if (req.session.loggedin)
                    res.render('lista_rapoarte', { 'result': result });
                else res.redirect('/login');
            });

        });

        app.get('/raport', function(request, response) {

            var id_raport = request.query.id_raport;

            console.log('acuma verific');
            console.log(id_raport + ' ii id-u');

            // 
            prepareReportPage(id_raport, function(result_final) {
                if (request.session.loggedin)
                    response.render('raport', { 'result_final': result_final });
                else response.redirect('/login');
            });
        });
    }
}

var preparePage = function(callback) {

    var reports = reportDAO.getAllReports(function(result) {

        callback(result);

    });
}


var prepareReportPage = function(id_raport, callback) {

    var reports = reportDAO.getReport(id_raport, function(result_final) {
        console.log('bah am ajuns aici');
        callback(result_final);
        console.log('bah am ajuns si aici');
    });
}