var connectionUtil = require('../util/connectionUtil');

module.exports = {

    resetPassword: function (user_name, pass) {
        var connection = connectionUtil.getConnection();

        connection.connect(function (err) {

            if (err) throw err;
            connection.query("SELECT * FROM useri_interni WHERE user_name="+user_name,
            function (err, result, fields) {
                // if(typeof result == 'object' && result)
                    // connection.query("UPDATE useri_interni SET pass="+pass+" WHERE user_name="+user_name);
                if (err) throw err;

                connection.end();
                
                callBack(result)
            });
        });

    },

    checkCredentials: function (user_name,callBack) {
        var connection = connectionUtil.getConnection();

        connection.connect(function (err) {

            if (err) throw err;
            connection.query("SELECT tip_user FROM useri_interni where user_name="+user_name,
            function (err, result, fields) {
                if (err) throw err;

                connection.end();
                
                callBack(result)
            });
        });

    }

};
