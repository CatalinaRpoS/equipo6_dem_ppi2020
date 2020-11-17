const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

/* Responder información principal sobre la familia
y la vivienda */
router.post("/familia-y-vivienda/:id", (req, res) => {
  const { id } = req.params;
  const { vivienda, estrato, habitantes } = req.body.familyInfo;
  mysqlConnection.query(
    `INSERT INTO PreguntasFamilia_respuestasFamilia_usuario(Id_usuario,Id_pregunta, Id_respuesta) VALUES(${id},1,(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${vivienda}')); INSERT INTO PreguntasFamilia_respuestasFamilia_usuario(Id_usuario,Id_pregunta, Id_respuesta) VALUES(${id},2,(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${estrato}')); INSERT INTO PreguntasFamilia_respuestasFamilia_usuario(Id_usuario,Id_pregunta, Id_respuesta) VALUES(${id},3,(SELECT Id_respuesta FROM Respuestas_familia WHERE Respuesta= '${habitantes}'))`,
    (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }
      res.json({ message: `Respuestas correctas` });
    }
  );
});

module.exports = router;
