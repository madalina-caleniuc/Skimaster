var clientDAO = require('../dao/ClientDAO');

module.exports = {

    bindView: function (app) {
        app.get('/main', function (req, res) {
            
            preparePage(function(result){

                res.render('main', {'result' : result});

            });
            
        })
    }

};

var preparePage = function (callback) {
    
    var clients = clientDAO.getAllClients(function(result){

        callback(result);
    });
    
}