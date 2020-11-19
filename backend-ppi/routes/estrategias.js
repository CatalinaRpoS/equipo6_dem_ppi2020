const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

router.get("/estrategias-ahorro/:id", (req, res)=>{
  const { id } = req.params;
  mysqlConnection.query(`SELECT Icono, Estrategia FROM Estrategias WHERE Valor<(SELECT Consumo_mensual FROM Usuarios WHERE Id_usuario=${id})`, (err, rows, fields)=>{
    if(err){
      console.log(err);
    } else{
      console.log(rows);
      res.json(rows)
    }
  })
});

module.exports = router;
