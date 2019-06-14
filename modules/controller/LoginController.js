module.exports = {

    bindView: function (app) {
        app.get('/', function (req, res) {
            
            // logica

            res.render('login');
        })

        app.post('/', function (req, res) {
            /// add custom login credential check logic

            // console.log(req);
            console.log("logare reusita");
            console.log(req.body.username)
            console.log(req.body.password)

            res.redirect('/main');
        })

    }

};



