module.exports = {

    bindView: function(app) {
        app.get('/', function(req, res) {
            res.redirect('/login');

        });

        app.get('/login', function(req, res) {

            // preparePage(function(){

            res.render('login');

            // });

        });

    }
};

var preparePage = function(callback) {

    // var login = loginDAO.getCredentials(function(result){

    //     callback(result);
    // });

}