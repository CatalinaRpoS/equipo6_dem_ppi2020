const express = require("express");
const app = express();
const cors = require("cors");
const ajustes = require("./routes/ajustes");
const registro = require("./routes/registro");
// const contrasena = require("../routes/contrasena");
// const familiaviv = require("../routes/familia-y-vivienda");
// const iniciosesion = require("../routes/inicio-sesion");
const electrodomesticos = require("./routes/electrodomesticos");
const test = require("./routes/test");

// Ajustes
app.set("port", process.env.PORT || 5000);

// Middlewares
app.use(cors()); //ayuda a evitar bloqueos HTTPS (CORS)
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //acepta peticiones desde cualquier sitio
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,PATCH,GET,DELETE"); //acepta los metodos CRUD
  res.setHeader("Content-Type", "application/json;charset=utf-8"); //acepta datps tipo JSON y caracteres especiales
  next();
});

// Routes //
app.use(ajustes);
app.use(registro);
// app.use("/api", contrasena);
// app.use("/api", familiaviv);
// app.use("/api", iniciosesion);
app.use(electrodomesticos);

// Ajustes del servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
