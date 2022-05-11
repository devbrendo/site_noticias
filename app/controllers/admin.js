module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });

}

module.exports.noticias_salvar = function (app, req, res) {
    var noticia = req.body;
    
    //tratar se as informações gravadas sao validas
    req.assert('titulo', 'Titulo é Obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é Obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é Obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é Obrigatória').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Noticia é Obrigatório').notEmpty();


    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }


    //recuperar conexao
    var connection = app.config.dbConnection();
    //model       
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    //salvarNoticia
    noticiasModel.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });
}