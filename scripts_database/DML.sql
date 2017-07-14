CALL sp_insertUsuario ('Kennet', '741');
CALL sp_insertUsuario ('Rodrigo', '1234');
CALL sp_insertUsuario ('Geovany', '321');
CALL sp_insertUsuario ('Mynor', '9425');
CALL sp_insertUsuario ('Jorge', '911');

CALL sp_insertTarea ('Tarea1', 'Investigacion', '2017-09-21  4:00:00', 5);
CALL sp_insertTarea ('Tarea2', 'Reporte1','2017-09-19 12:00:00', 3);
CALL sp_insertTarea ('Tarea3', 'Reporte2','2017-10-17 9:00:00', 4);
CALL sp_insertTarea ('Tarea4', 'Base de datos','2017-12-01 10:00:00', 1);
CALL sp_insertTarea ('Tarea5', 'Laboratorio','2017-04-26 8:00:00', 2);

SELECT*FROM UsuarioTareas;
SELECT*FROM Usuario;
SELECT*FROM Tarea;