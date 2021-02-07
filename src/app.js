const express = require('express');

// creamos e iniciamos el servidor de express: app es nuestro servidor
const app = express();

// * Middleware obligatorio! antes de las rutas usar de express Json
// para que podamos usar el req.body
app.use(express.json());

app.use('/api/users', require('../routes/users'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express corriendo en el puerto ${PORT}`);
});

// exportamos nuestra aplicacion para los test
module.exports = app;
