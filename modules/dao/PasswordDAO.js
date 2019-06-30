var connectionUtil = require('../util/connectionUtil');

module.exports = {

    resetPassword: function(user, pass) {
            var connection = connectionUtil.getConnection();
            let username = user;
            let password = pass;
            connection.connect(function(err) {

                if (err) throw err;
                connection.query("SELECT * FROM useri_interni WHERE username=?", [username],
                    function(err, result, fields) {
                        console.log('username-ul ' + username + ' exista');
                        if (err) throw err;

                        if (typeof result == 'object' && result)
                            connection.query("UPDATE useri_interni SET password=? WHERE username=?", [password, username],
                                function(err, result, fields) {
                                    console.log('resetez ' + username + ' cu parola ' + password);
                                    if (err) throw err;
                                    connection.end();
                                });
                    });

            })
        }
        // },

    // checkCredentials: function(user_name, callBack) {
    //     var connection = connectionUtil.getConnection();

    //     connection.connect(function(err) {

    //         if (err) throw err;
    //         connection.query("SELECT tip_user FROM useri_interni where username=" + user_name,
    //             function(err, result, fields) {
    //                 if (err) throw err;

    //                 connection.end();

    //                 callBack(result)
    //             });
    //     });

    // }

};