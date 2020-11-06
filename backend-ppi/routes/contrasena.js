const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

/* Confirmar identidad
   -- Pendiente --
*/

/* Configurar nueva contraseña */
router.patch("/configura-contrasena/:id", (req, res) => {
  const { contrasena } = req.body;
  const { id } = req.params;
  mysqlConnection.query(
    `UPDATE Usuarios SET Contrasena= ${contrasena} WHERE Id_usuario = ${id}`,
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
