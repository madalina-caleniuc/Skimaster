var mysql = require('mysql');

module.exports = {

    connection: "ski",

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

