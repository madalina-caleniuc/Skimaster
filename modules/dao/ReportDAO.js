var connectionUtil = require('../util/connectionUtil');

module.exports = {

    getAllReports: function (callBack) {
        var connection = connectionUtil.getConnection();

        connection.connect(function (err) {

            if (err) throw err;

            connection.query("SELECT id_raport, nume_raport from rapoarte", function (err, result, fields) {
                if (err) throw err;

                connection.end();

                callBack(result)
            });
        });

    },

    getReport: function (id, callBack) {
        var connection = connectionUtil.getConnection();

        connection.connect(function (err) {

            if (err) throw err;
            connection.query("SELECT nume_procedura FROM rapoarte WHERE id_raport=?", [id],
                function (err, result_nume, fields) {
                    console.log("nume procedura:" + result_nume[0].nume_procedura);
                    let nume_proc=result_nume[0].nume_procedura;
                    console.log("sau " + nume_proc);
                    connection.query("CALL ?", [nume_proc],
                        function (err, result_final) {
                            callBack(result_final)
                        })

                    if (err) console.dir(err);

                    connection.end();
                });
        });
    }

};