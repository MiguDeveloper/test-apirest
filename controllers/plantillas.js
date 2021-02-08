const { response } = require('express');
const path = require('path');

const getPlantillaIndex = (req, res = response) => {
  const pathPlantilla = path.join(__dirname, '../static/index.html');
  res.sendFile(pathPlantilla);
};

module.exports = { getPlantillaIndex };
