const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

// Iniciar sesión en Alto Voltaje
router.post("/iniciar-sesion", (req, res) => {
  const { email, contrasena } = req.body;
  mysqlConnection.query(
    `SELECT * FROM Usuarios WHERE Email='${email}' AND Contrasena='${contrasena}'`,
    (err, rows, results) => {
      if (err) {
        res.json({ message: `Error` });
        return console.log(err.message);
      }
      if (rows.length > 0) {
        res.json({ message: `Bienvenido`, rows });
      } else {
        res.json({
          message: `Info incorrecta`
        });
      }
    }
  );
});

router.get("/inicio/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    `SELECT Nombre FROM Usuarios WHERE Id_usuario=${id}`,
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
