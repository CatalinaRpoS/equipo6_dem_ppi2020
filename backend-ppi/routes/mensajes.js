const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

router.post("/enviar-mensaje", (req, res) => {
  const { nombre, email, mensaje } = req.body.infoMensaje;
  mysqlConnection.query(
    `INSERT INTO Mensajes (Nombre, Email, Mensaje) VALUES ('${nombre}', '${email}', '${mensaje}');`,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: "Error" });
        console.log(err);
      } else {
        res.json({ message: "¡El mensaje se guardó correctamente!" });
      }
    }
  );
});

module.exports = router;
