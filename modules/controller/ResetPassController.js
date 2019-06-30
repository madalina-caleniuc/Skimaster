var passwordDAO = require('../dao/PasswordDAO');
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

        app.get('/resetare_parola', function(req, res) {
            if (req.session.loggedin)
                if (req.session.username == 'admin')
                    res.render('resetare_parola');
                else res.send("Nu aveti drepturi de admin.");
            else res.redirect('/login');

        });

        app.post('/reset', function(request, res) {
            if (request.session.loggedin)
                if (request.session.username == 'admin') {
                    let user = request.body.username;
                    let pass = request.body.password;

                    console.log(user);
                    console.log(pass);

                    resetPassword(user, pass);
                    res.send("Parola modificata cu succes.");
                } else res.render('main', { 'result': result });
            else res.redirect('/login');
        })
    }


};

var resetPassword = function(username, password) {

    passwordDAO.resetPassword(username, password);

}