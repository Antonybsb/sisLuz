const express = require('express');
const membros = require('./membrosRoute');

module.exports = app => {
  app.use(express.json());
  app.use(membros);
};
