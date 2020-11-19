const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

router.get("/consumo-de-energia/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `SELECT Consumo_diario, Consumo_mensual, Respuesta
    FROM Usuarios
    INNER JOIN PreguntasFamilia_respuestasFamilia_usuario
    ON Usuarios.Id_usuario= PreguntasFamilia_respuestasFamilia_usuario.Id_usuario AND Usuarios.Id_usuario = ${id}
    INNER JOIN Respuestas_familia
    WHERE PreguntasFamilia_respuestasFamilia_usuario.Id_pregunta=2 AND Respuestas_familia.Id_respuesta=PreguntasFamilia_respuestasFamilia_usuario.Id_respuesta;`,
    (err, rows, fields) => {
      if (!err) {
        console.log(rows[0]);
        // res.json(rows[0]);
        const { Consumo_mensual, Consumo_diario, Respuesta } = rows[0];
        let Precio_mensual = 0;
        let Precio_diario = 0;
        let info = {};
        if (Respuesta === "1") {
          Precio_mensual = Math.round(Consumo_mensual * 209.82);
          Precio_diario = Math.round(Consumo_diario * 209.82);
          info = {
            Consumo_mensual,
            Consumo_diario,
            Precio_mensual,
            Precio_diario
          };
        }
        if (Respuesta === "2") {
          Precio_mensual = Math.round(Consumo_mensual * 262.27);
          Precio_diario = Math.round(Consumo_diario * 262.27);
          info = {
            Consumo_mensual,
            Consumo_diario,
            Precio_mensual,
            Precio_diario
          };
        }
        if (Respuesta === "3") {
          Precio_mensual = Math.round(Consumo_mensual * 443.05);
          Precio_diario = Math.round(Consumo_diario * 443.05);
          info = {
            Consumo_mensual,
            Consumo_diario,
            Precio_mensual,
            Precio_diario
          };
        }
        if (Respuesta === "4") {
          Precio_mensual = Math.round(Consumo_mensual * 521.24);
          Precio_diario = Math.round(Consumo_diario * 521.24);
          info = {
            Consumo_mensual,
            Consumo_diario,
            Precio_mensual,
            Precio_diario
          };
        }
        if (Respuesta === "5" || Respuesta === "6") {
          Precio_mensual = Math.round(Consumo_mensual * 625.49);
          Precio_diario = Math.round(Consumo_diario * 625.49);
          info = {
            Consumo_mensual,
            Consumo_diario,
            Precio_mensual,
            Precio_diario
          };
        }
        res.json(info);
      }
      if (err) {
        res.json({ message: err });
        console.log(err);
      }
    }
  );
});

router.get("/detalles/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `SELECT Ilustracion, Nombre FROM Electrodomesticos
  INNER JOIN Electrodomesticos_usuario
  WHERE Electrodomesticos.Id_electrodomestico = Electrodomesticos_usuario.Id_Electrodomestico AND Electrodomesticos_usuario.Id_usuario=${id} AND Electrodomesticos_usuario.Tiempo_horas=(SELECT MAX(Tiempo_horas) FROM Electrodomesticos_usuario WHERE Id_usuario=${id})`,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

module.exports = router;
