const estudante = require('./estudante.json');
const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante.nome);// não tem propriedades
const objEstudante = JSON.parse(estudante);
