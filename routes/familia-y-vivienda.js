const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

/* Responder información principal sobre la familia
y la vivienda */
router.post("/familia-y-vivienda/:id", (req, res) => {
  const { id } = req.params;
  const { vivienda, estrato, habitantes } = req.body.familyInfo;
  mysqlConnection.query(
    `SELECT * FROM PreguntasFamilia_respuestasFamilia_usuario WHERE Id_usuario=${id} AND Id_pregunta=1;`,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: err });
      } else {
        if (rows.length === 0) {
          mysqlConnection.query(
            `INSERT INTO PreguntasFamilia_respuestasFamilia_usuario(Id_usuario,Id_pregunta, Id_respuesta) VALUES(${id},1,(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${vivienda}')); INSERT INTO PreguntasFamilia_respuestasFamilia_usuario(Id_usuario,Id_pregunta, Id_respuesta) VALUES(${id},2,(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${estrato}')); INSERT INTO PreguntasFamilia_respuestasFamilia_usuario(Id_usuario,Id_pregunta, Id_respuesta) VALUES(${id},3,(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${habitantes}'))`,
            (err, results, fields) => {
              if (err) {
                return console.error(err.message);
              }
              res.json({ message: `Respuestas correctas` });
            }
          );
        }
        if (rows.length > 0) {
          mysqlConnection.query(
            `UPDATE PreguntasFamilia_respuestasFamilia_usuario SET Id_respuesta=(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${vivienda}') WHERE Id_usuario=${id} AND Id_pregunta= 1; UPDATE PreguntasFamilia_respuestasFamilia_usuario SET Id_respuesta=(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${estrato}') WHERE Id_usuario=${id} AND Id_pregunta= 2; UPDATE PreguntasFamilia_respuestasFamilia_usuario SET Id_respuesta=(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${habitantes}') WHERE Id_usuario=${id} AND Id_pregunta= 3;`,
            (err, results, fields) => {
              if (err) {
                return console.error(err.message);
              }
              res.json({ message: `Respuestas correctas 2` });
            }
          );
        }
      }
    }
  );
});

/* Responder información secundaria sobre la familia
y la vivienda */
router.post("/familia-y-vivienda-2/:id", (req, res) => {
  const { id } = req.params;
  const { comuna, empresa, servicio } = req.body.familyInfo;
  mysqlConnection.query(
    `SELECT * FROM PreguntasFamilia_respuestasFamilia_usuario WHERE Id_usuario=${id} AND Id_pregunta=4;`,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: err });
      } else {
        if (rows.length === 0) {
          mysqlConnection.query(
            `INSERT INTO PreguntasFamilia_respuestasFamilia_usuario(Id_usuario,Id_pregunta, Id_respuesta) VALUES(${id},4,(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${comuna}')); INSERT INTO PreguntasFamilia_respuestasFamilia_usuario(Id_usuario,Id_pregunta, Id_respuesta) VALUES(${id},5,(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${empresa}')); INSERT INTO PreguntasFamilia_respuestasFamilia_usuario(Id_usuario,Id_pregunta, Id_respuesta) VALUES(${id},6,(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${servicio}'))`,
            (err, results, fields) => {
              if (err) {
                return console.error(err.message);
              }
              res.json({ message: `Respuestas correctas` });
            }
          );
        }
        if (rows.length > 0) {
          mysqlConnection.query(
            `UPDATE PreguntasFamilia_respuestasFamilia_usuario SET Id_respuesta=(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${comuna}') WHERE Id_usuario=${id} AND Id_pregunta= 4; UPDATE PreguntasFamilia_respuestasFamilia_usuario SET Id_respuesta=(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${empresa}') WHERE Id_usuario=${id} AND Id_pregunta= 5; UPDATE PreguntasFamilia_respuestasFamilia_usuario SET Id_respuesta=(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${servicio}') WHERE Id_usuario=${id} AND Id_pregunta= 6;`,
            (err, results, fields) => {
              if (err) {
                return console.error(err.message);
              }
              res.json({ message: `Respuestas correctas 2` });
            }
          );
        }
      }
    }
  );
});

module.exports = router;
