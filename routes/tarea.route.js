var express = require('express');
var tarea = require('../model/tarea.model');
var router = express.Router();
var uri = '/api/v1/tarea';

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: 60*60', Date.now());
  next();
});

router.get(uri, function(req, res) {
	tarea.select(idTarea, function(tareas) {
    if(typeof tareas !== 'undefined') {
      res.json(tareas);
    } else {
      res.json({"mensaje" : "No hay tareas"});
    }
  });
});

router.get(uri, function(req, res) {
	var idTarea = req.params.id;
  tarea.select(idTarea, function(tareas) {
    if(typeof tareas !== 'undefined') {
      res.json(tareas);
    } else {
      res.json({"mensaje" : "No hay tareas"});
    }
  });
});

module.exports = router;
