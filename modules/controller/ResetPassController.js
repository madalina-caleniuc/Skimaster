var passwordDAO = require('../dao/PasswordDAO');

module.exports = {

    bindView: function (app) {
        app.get('/reset_pass', function (req, res) {
            
            preparePage(function(result){

                res.render('reset_pass', {'result' : result});

            });
            
        })
    }

};

var preparePage = function (callback) {

    // let username = "admin";
    // var pass = passwordDAO.checkCredentials(function(username,result){

    //     callback(result);
    // });
    
}