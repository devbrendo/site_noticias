module.exports = function (app) {
    app.get('/formulario_inclusao_noticia', function (req, res) {
        res.render("admin/form_add_noticia")

    });
    app.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;

        //recuperar conexao
        var connection = app.config.dbConnection();
        //model       
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        //salvarNoticia
        noticiasModel.salvarNoticia(noticia,function (error, result) {
            res.redirect('/noticias');
        });


    });
};