const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

/* Confirmar identidad */
router.post("/olvidaste-contrasena", (req, res) => {
  const { documento, nombre } = req.body.userData;
  mysqlConnection.query(
    `SELECT * FROM Usuarios WHERE Documento='${documento}' AND Nombre='${nombre}'`,
    (err, rows, results) => {
      if (err) {
        res.json({ message: `Error` });
        return console.log(err.message);
      }
      if (rows.length > 0) {
        res.json({ message: `Usuario confirmado`, rows });
      } else {
        res.json({
          message: `Usuario no confirmado`
        });
      }
    }
  );
});

/* Configurar nueva contraseña */
router.patch("/configura-contrasena/:id", (req, res) => {
  const { contrasena } = req.body.infoPass;
  const { id } = req.params;
  mysqlConnection.query(
    `UPDATE Usuarios SET Contrasena= '${contrasena}' WHERE Id_usuario = ${id}`,
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "¡Contraseña actualizada!" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
