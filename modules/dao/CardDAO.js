var connectionUtil = require('../util/connectionUtil');

module.exports = {

    getAllCards: function (callBack) {
        var connection = connectionUtil.getConnection();

        connection.connect(function (err) {

            if (err) throw err;
            connection.query("SELECT * FROM carduri", function (err, result, fields) {
                if (err) throw err;

                connection.end();
                
                callBack(result)
            });
        });

    }

};
