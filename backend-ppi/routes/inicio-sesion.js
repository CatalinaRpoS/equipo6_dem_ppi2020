const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

// Iniciar sesión en Alto Voltaje
router.post("/iniciar-sesion", (req, res) => {
  const { email, contrasena } = req.body;
  mysqlConnection.query(
    `SELECT * FROM Usuarios WHERE Email='${email} AND Contrasena='${contrasena};'`,
    (err, rows, fields) => {
      if (!err) {
        res.json({ message: "¡Bienvenido a la experiencia personalizada!" });
      } else {
        res.json({
          message:
            "¡Correo y/o contraseña incorrectos! Por favor, intenta nuevamente"
        });
      }
    }
  );
});

module.exports = router;
