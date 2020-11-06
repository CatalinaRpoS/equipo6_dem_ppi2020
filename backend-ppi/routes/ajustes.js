const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

/* Obtener la información del usuario en los 
ajustes de la cuenta */
router.get("/ajustes/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `SELECT Documento, Nombre, Email, Contrasena AS 'Contraseña' FROM Usuarios WHERE Id_usuario=${id}`,
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

/* Actualizar la información personal del usuario
en los ajustes de la cuenta */
router.patch("/ajustes/:id", (req, res) => {
  const { fecha_nacimiento, genero, ciudad_residencia } = req.body;
  const { id } = req.params;
  mysqlConnection.query(
    `UPDATE Usuarios SET Fecha_de_nacimiento = ${fecha_nacimiento}, Genero = ${genero}, Ciudad= ${ciudad_residencia} WHERE Id_usuario = ${id}`,
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "¡Información actualizada!" });
      } else {
        console.log(err);
      }
    }
  );
});

/* Borrar la cuenta del usuario en los ajustes de
la cuenta */
router.delete("/ajustes/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `DELETE FROM Usuarios WHERE Id_usuario = ${id}`,
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "¡Usuario eliminado!" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
