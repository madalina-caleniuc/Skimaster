var reportDAO = require('../dao/ReportDAO');

module.exports = {

    bindView: function (app) {
        app.get('/report', function (req, res) {
            
            preparePage(function(result){

                res.render('report', {'result' : result});

            });
            
        })
    }

};

var preparePage = function (callback) {
    
    var reports = reportDAO.getAllReports(function(result){

        callback(result);
    });
};