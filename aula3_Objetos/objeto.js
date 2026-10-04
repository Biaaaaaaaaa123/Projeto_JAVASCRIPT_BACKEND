//Guardar os dados de pessoas

const estudante  = {

    nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'

}
// acessa a propriedade do objeto 
console.log(estudante.nome); 
console.log(`os 3 primeiros numeros do CPF: ${estudante.cpf.substring(0,3)}`)