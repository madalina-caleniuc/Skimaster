var connectionUtil = require('../util/connectionUtil');

module.exports = {

     getAllReports: function (callBack) {
        var connection = connectionUtil.getConnection();

        connection.connect(function (err) {

            if (err) throw err;

            connection.query("SELECT nume_raport from rapoarte", function (err, result, fields) {
                if (err) throw err;

                connection.end();
                
                callBack(result)
            });
        });

     }

};