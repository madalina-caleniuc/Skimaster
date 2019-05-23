var mysql = require('mysql');

module.exports = {

    connection: "mata",

    getConnection: function () {

        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "skimaster"
        });

        return connection;
    }

};

