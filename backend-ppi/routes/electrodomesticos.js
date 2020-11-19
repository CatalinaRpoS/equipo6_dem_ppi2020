const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

/* Ingresar horas aproximadas de uso de los 
electrodomésticos */

router.post("/electrodomesticos/:id", (req, res) => {
  const { id } = req.params;
  const {
    nevera,
    lavadora,
    televisor,
    licuadora,
    horno,
    olla,
    ventilador,
    plancha,
    secador,
    bombillos,
    sanduchera,
    fogon,
    celular,
    computador
  } = req.body.electrodomesticos;
  mysqlConnection.query(
    `SELECT * FROM Electrodomesticos_usuario WHERE Id_usuario=${id}`,
    (err, rows, fields) => {
      if (err) {
        res.json({ message: err });
      } else {
        if (rows.length === 0) {
          mysqlConnection.query(
            `INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(1,${id},${nevera});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(2,${id},${lavadora});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(3,${id},${televisor});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(4,${id},${licuadora});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(5,${id},${horno});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(6,${id},${olla});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(7,${id},${ventilador});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(8,${id},${plancha});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(9,${id},${secador});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(10,${id},${bombillos});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(11,${id},${sanduchera});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(12,${id},${fogon});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(13,${id},${celular});
          INSERT INTO Electrodomesticos_usuario(Id_electrodomestico, Id_usuario, Tiempo_horas) VALUES(14,${id},${computador})`,
            (err, rows, fields) => {
              if (err) {
                res.json({ message: "La información no se pudo guardar", err });
              } else {
                mysqlConnection.query(
                  `UPDATE Usuarios SET Consumo_mensual = (SELECT ((SELECT SUM(Electrodomesticos.Potencia_kwh * Electrodomesticos_usuario.Tiempo_horas)
              FROM Electrodomesticos, Electrodomesticos_usuario
              WHERE Electrodomesticos.Id_electrodomestico = Electrodomesticos_usuario.Id_electrodomestico AND Electrodomesticos_usuario.Id_usuario = ${id})*30)), Consumo_diario= (SELECT SUM(Electrodomesticos.Potencia_kwh * Electrodomesticos_usuario.Tiempo_horas) AS 'Consumo diario'
              FROM Electrodomesticos, Electrodomesticos_usuario
              WHERE Electrodomesticos.Id_electrodomestico = Electrodomesticos_usuario.Id_electrodomestico AND Electrodomesticos_usuario.Id_usuario = ${id}) WHERE Id_usuario= ${id};`,
                  (err, rows, fields) => {
                    if (err) {
                      res.json({ message: err });
                    } else {
                      res.json({
                        message: "La información se procesó correctamente"
                      });
                    }
                  }
                );
              }
            }
          );
        }
        if (rows.length > 0) {
          mysqlConnection.query(
            `UPDATE Electrodomesticos_usuario SET Tiempo_horas=${nevera} WHERE Id_usuario=${id} AND Id_electrodomestico= 1;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${lavadora} WHERE Id_usuario=${id} AND Id_electrodomestico= 2;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${televisor} WHERE Id_usuario=${id} AND Id_electrodomestico= 3;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${licuadora} WHERE Id_usuario=${id} AND Id_electrodomestico= 4;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${horno} WHERE Id_usuario=${id} AND Id_electrodomestico= 5;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${olla} WHERE Id_usuario=${id} AND Id_electrodomestico= 6;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${ventilador} WHERE Id_usuario=${id} AND Id_electrodomestico= 7;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${plancha} WHERE Id_usuario=${id} AND Id_electrodomestico= 8;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${secador} WHERE Id_usuario=${id} AND Id_electrodomestico= 9;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${bombillos} WHERE Id_usuario=${id} AND Id_electrodomestico= 10;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${sanduchera} WHERE Id_usuario=${id} AND Id_electrodomestico= 11;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${fogon} WHERE Id_usuario=${id} AND Id_electrodomestico= 12;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${celular} WHERE Id_usuario=${id} AND Id_electrodomestico= 13;
            UPDATE Electrodomesticos_usuario SET Tiempo_horas=${computador} WHERE Id_usuario=${id} AND Id_electrodomestico= 14`,
            (err, rows, fields) => {
              if (err) {
                res.json({ message: "La información no se pudo guardar", err });
              } else {
                mysqlConnection.query(
                  `UPDATE Usuarios SET Consumo_mensual = (SELECT ((SELECT SUM(Electrodomesticos.Potencia_kwh * Electrodomesticos_usuario.Tiempo_horas)
                FROM Electrodomesticos, Electrodomesticos_usuario
                WHERE Electrodomesticos.Id_electrodomestico = Electrodomesticos_usuario.Id_electrodomestico AND Electrodomesticos_usuario.Id_usuario = ${id})*30)), Consumo_diario= (SELECT SUM(Electrodomesticos.Potencia_kwh * Electrodomesticos_usuario.Tiempo_horas) AS 'Consumo diario'
                FROM Electrodomesticos, Electrodomesticos_usuario
                WHERE Electrodomesticos.Id_electrodomestico = Electrodomesticos_usuario.Id_electrodomestico AND Electrodomesticos_usuario.Id_usuario = ${id}) WHERE Id_usuario= ${id};`,
                  (err, rows, fields) => {
                    if (err) {
                      res.json({ message: err });
                    } else {
                      res.json({
                        message: "La información se procesó correctamente"
                      });
                    }
                  }
                );
              }
            }
          );
        }
      }
    }
  );
});

module.exports = router;
