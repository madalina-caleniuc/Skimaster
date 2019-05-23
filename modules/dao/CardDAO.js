var connection = require('./util/Connection');

module.exports = {

    getAllCards: function () {

        connection.connect(function (err) {
            if (err) throw err;
            con.query("SELECT * FROM carduri", function (err, result, fields) {
                if (err) throw err;
                console.log(result[0].name);

                nam = result[0].name;
                addr = result[0].address;
                console.log('nam: ' + nam);
            });
        });

    }

};
