var loginDAO = require('../dao/LoginDAO');

module.exports = {

    bindView: function (app) {
        app.post('/auth', function (request, response) {
            var username = request.body.username;
            var password = request.body.password;

            if (username && password) {
                preparePage(username, password, function (result) {
                    if (result.length > 0) {
                        request.session.loggedin = true;
                        request.session.username = username;
                        response.redirect('/main');
                    } else {
                        response.send('Incorrect Username and/or Password!');
                    }
                    response.end();
                })
            }
            else {
                response.send('Please enter Username and Password!');
                response.end();
            }
        },

        app.get('/logout',function(request,response){
            request.session.loggedin = false;
            response.redirect('/login');
        })

        )
    }
}


var preparePage = function (username, password, callback){

    var auth = loginDAO.getCredentials(username, password, function (result) {

        callback(result);
    });

}