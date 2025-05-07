const db = require('./src/models');
const Membro = db.Membro;

async function listarMembros() {
  const membros = await Membro.findAll();
  console.log(JSON.stringify(membros, null, 2)); // pra formatar melhor a saída
}

listarMembros();
