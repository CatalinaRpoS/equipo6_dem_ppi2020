const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

// Crear nueva cuenta
router.post("/registro", (req, res) => {
  const { documento, nombre, email, contrasena } = req.body;
  mysqlConnection.query(
    `INSERT INTO Usuarios(Documento, Nombre, Email, Contrasena) VALUES('${documento}', '${nombre}', '${email}', '${contrasena}');`,
    (err, results, fields) => {
      if (err) {
        res.json({ message: `¡Error al crear la cuenta!` });
        return console.error(err.message);
      }
      res.json({ message: "¡Cuenta creada!", results });
    }
  );
});

module.exports = router;
