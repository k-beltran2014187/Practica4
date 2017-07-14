var express = require('express');
var usuarioModel = require('../model/usuario.model');
var usuarioRoute = express.Router();

usuarioRoute.route('/api/v1/usuario/')
  .get(function(req, res) {
    usuarioModel.selectAll(function(resultados) {
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"mensaje":"Se envio una peticion"});
      }
    });
  })
  .post(function(req, res) {
    var data = {
      idUsuario : null,
      nick: req.body.nick,
      contrasena: req.body.contrasena
    }

    usuarioRoute.insert(data, function(error, resultado){
      if (resultado && resultado.insertId > 0) {
        var idUsuario = resultado.insertId;
        res.redirect("api/usuario/" + idUsuario);
      } else {
        res.json({"Mensaje": "No se inserto ningun usuario"});
      }
    });
  });

usuarioRoute.route('/api/v1/usuario/:idUsuario')
  .get(function(req, res) {
    var idUsuario = req.params.idUsuario;
    usuarioRoute.select(idUsuario, function(error, resultado){
        if (typeof resultado !== undefined) {
          res.json(resultado);
        } else {
          res.json({"Mensaje": "No hay usuarios"});
        }
    });
  })
  .put(function(req, res) {
    var idUsuario = req.params.idUsuario;

    var data = {
      idUsuario: req.body.idUsuario,
      nick: req.body.nick,
      contrasena: req.body.contrasena
    }

    if (idUsuario === data.idUsuario) {
        usuarioRoute.update(data, function(error, resultado){
          if (resultado !== undefined) {
            res.redirect("api/usuario");
          } else {
            res.json({"Mensaje": "No se modifico el usuario"});
          }
        });
      } else {
        res.json({"Mensaje": "Los Id's no coinciden"});
      }
    })
  .delete(function(req, res) {
    var idUsuario = req.params.idUsuario;
    usuarioRoute.select(idUsuario, function(error, resultado){
        if (typeof resultado !== undefined) {
          res.json(resultado);
        } else {
          res.json({"Mensaje": "No se elimino el usuario"});
        }
    });
  });


module.exports = usuarioRoute;
