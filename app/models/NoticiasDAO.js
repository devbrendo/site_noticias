function NoticiasDAO(connection){
    this._connection = connection;

}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias oder by data_criacao desk', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia, callback);
}
NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
    console.log(noticia);
    this._connection.query('insert into noticias set ?', noticia, callback)
    /*Neste caso é fundamental que o JSON possua como rotulo das variaveis
    o mesmo nome que as colunas da tabela*/
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function () {
    return NoticiasDAO;
}