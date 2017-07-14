var database = require('../config/database.config');
var usuario = {};

usuario.selectAll = function(callback) {
  if(database) {
    database.query('CALL sp_selectUsuario',
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

usuario.find = function(idUsuario, callback) {
  if(database) {
    database.query('CALL sp_autenticarUsuario', idUsuario,
      function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(resultado[0]);
      }
    });
  }
}

usuario.insert = function(data, callback) {
  if(database) {
    database.query("CALL sp_insertUsuario(?,?)", [data.nick, data.contrasena],
    function(error, resultado) {
      if (error) {
          throw error;
        } else {
          callback(null, {"insertId": resultado.insertId});
        }
    });
  }
}

usuario.update = function(data, callback) {
  if(database) {
    var sql = 'CALL sp_updateUsuario';
    database.query(sql,
    [data.nick, data.contrasena, data.idUsuario],
    function(error, resultado) {
      if (error) {
          throw error;
        } else {
          callback(null, data);
        }
    });
  }
}

usuario.delete = function(idUsuario, callback) {
  if(database) {
    var sql = 'CALL sp_deleteUsuario';
    database.query(sql, idUsuario,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        var notificacion = {"Mensaje" : ""};

        if (resultado.affectedRows > 0) {
          notificacion.Mensaje = "Se elimino el usuario";
        } else {
          notificacion.Mensaje = "No se elimino el usuario";
        }
        callback(null, notificacion);
      }
    });
  }
}



module.exports = usuario;
