const express = require('express');
const membros = require('./membrosRoute.js');
const enderecos = require('./enderecosRoute.js');

module.exports = app => {
  app.use(express.json());
  app.use(membros);
  app.use(enderecos);
};
