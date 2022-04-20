module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'
        });//parametros passados em json

        connection.query('select * from noticias', function (erro, result) {
            res.send(result);
        });
        //res.render("noticias/noticias")

    });
};
