var connectionUtil = require('../util/connectionUtil');

module.exports = {

    getCredentials: function (username,password,callBack) {
        var connection = connectionUtil.getConnection();

        connection.connect(function (err) {

            if (err) throw err;
            connection.query("SELECT * FROM useri_interni WHERE username=? AND password=?", [username, password],
            function (err, result) {
                
                if (err) console.dir(err);

                connection.end();
                
                callBack(result)
            });
        });

    }

};
