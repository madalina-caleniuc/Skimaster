var connectionUtil = require('../util/connectionUtil');

const comenzi = ["empty",
    "SELECT id_card as Card, nr_puncte_disponibile as Puncte, DATE_FORMAT(data_incarcare, \"\%d \%M \%Y\") as \'Data incarcare\' FROM skimaster.balans_carduri",
    "SELECT DATE_FORMAT(ab.data, \"\%d \%M \%Y\") as Data, c.id_card as Card, cl.nume_client as Nume, z.nume_zona as Zona FROM skimaster.activitate_bariere ab JOIN carduri c on ab.id_card=c.id_card JOIN clienti cl on c.id_client=cl.id_client JOIN zone z on ab.id_zona=z.id_zona",
    "",
    "SELECT c.id_card as Card, cl.nume_client as Nume, DATE_FORMAT(c.data_emitere, \"\%d \%M \%Y\") as \'Valabil de la\', DATE_FORMAT(c.data_expirare, \"\%d \%M \%Y\") as \'Expirat la\', b.nr_puncte_disponibile as \'Puncte ramase\' FROM carduri c JOIN clienti cl on c.id_client = cl.id_client LEFT JOIN balans_carduri b on c.id_card = b.id_card WHERE c.data_expirare < CURDATE()"
];

module.exports = {

    getAllReports: function(callBack) {
        var connection = connectionUtil.getConnection();

        connection.connect(function(err) {

            if (err) throw err;

            connection.query("SELECT id_raport, nume_raport from rapoarte", function(err, result, fields) {
                if (err) throw err;

                connection.end();

                callBack(result)
            });
        });

    },

    getReport: function(id, callBack) {
        var connection = connectionUtil.getConnection();

        connection.connect(function(err) {

            if (err) throw err;
            console.log("SQL de rulat " + comenzi[id]);
            connection.query(comenzi[id],
                function(err, result_final) {
                    //console.log('haumiau:' + result_final[0]);
                    //console.log(JSON.stringify(result_final[0], false, null));
                    if (err) console.log(err);
                    callBack(result_final)
                })

            if (err) console.dir(err);

            connection.end();

        });
    }

};