var database = require('../config/database.config');
var tarea = {};

tarea.selectAll = function(callback) {
  if(database) {
    database.query('CALL sp_selectTarea',
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

tarea.insert = function(data, callback) {
  if(database) {
    database.query("CALL sp_insertTarea(?,?,?)", [data.titulo, data.descripcion, data.fecha_final],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });
  }
}


module.exports = tarea;
