const estudante  = {

    nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'

}
function exibeInfoEstudante(objEstudante,InfoEstudante){
    return objEstudante[InfoEstudante];
}
console.log(exibeInfoEstudante(estudante,'nome'));