var cardDAO = require('../dao/CardDAO');

module.exports = {

    bindView: function (app) {
        app.get('/card', function (req, res) {
            
            preparePage(function(result){

                res.render('card', {'result' : result});

            });
            
        })
    }

};

var preparePage = function (callback) {
    
    var cards = cardDAO.getAllCards(function(result){

        callback(result);
    });
    
}