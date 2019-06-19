var connectionUtil = require('../util/ConnectionUtil');

module.exports = {

    getAllClients: function (callBack) {
        var connection = connectionUtil.getConnection();

        connection.connect(function (err) {
            
            if (err) throw err;

            connection.query("SELECT * FROM clienti", function (err, result, fields) {
                if (err) throw err;

                connection.end();
                
                callBack(result)
            });
        });
    },

    getClietnById: function (id) {

        // connection.connect(function (err) {
        //     if (err) throw err;
        //     con.query("SELECT * FROM clienti", function (err, result, fields) {
        //         if (err) throw err;
        //         console.log(result[0].name);

        //         nam = result[0].name;
        //         addr = result[0].address;
        //         console.log('nam: ' + nam);
        //     });
        // });

    },

    getClietnByName: function (name) {

        // connection.connect(function (err) {
        //     if (err) throw err;
        //     con.query("SELECT * FROM clienti", function (err, result, fields) {
        //         if (err) throw err;
        //         console.log(result[0].name);

        //         nam = result[0].name;
        //         addr = result[0].address;
        //         console.log('nam: ' + nam);
        //     });
        // });

    }

};
