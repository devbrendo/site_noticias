var app = require('./config/server');

/*var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);
*/ //desconsiderando rotas ao utilizar consign


app.listen(3000, function () {
    console.log("servidor ON");
}); 
