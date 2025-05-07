const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'root', {
  host: '127.0.0.1',
  port: 5433,
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => console.log('Conexão com PostgreSQL estabelecida!'))
  .catch(err => console.error('Erro:', err));

module.exports = sequelize;
