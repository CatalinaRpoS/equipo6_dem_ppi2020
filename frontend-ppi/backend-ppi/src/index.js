const express = require("express");
const app = express();
const ajustes = require("../routes/ajustes");
const registro = require("../routes/registro");
const contrasena = require("../routes/contrasena");
const familiaviv = require("../routes/familia-y-vivienda");

// Ajustes
app.set("port", 3002);

// Middlewares
app.use(express.json());

// Routes //
app.use("/api", ajustes);
app.use("/api", registro);
app.use("/api", contrasena);
app.use("/api", familiaviv);

// Ajustes del servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
