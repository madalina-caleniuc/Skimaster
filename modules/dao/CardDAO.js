var connectionUtil = require('../util/connectionUtil');

module.exports = {

    getAllCards: function (callBack) {
        var connection = connectionUtil.getConnection();

        connection.connect(function (err) {

            if (err) throw err;
            connection.query("SELECT c.id_card, cl.nume_client, DATE_FORMAT(c.data_emitere, \"%d %M %Y\") as data_emitere, DATE_FORMAT(c.data_expirare, \"%d %M %Y\") as data_expirare, cl.vip FROM skimaster.carduri c JOIN clienti cl on c.id_client=cl.id_client",
            function (err, result, fields) {
                if (err) throw err;

                connection.end();
                
                callBack(result)
            });
        });

    }

};
