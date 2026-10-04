const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
 endereco: [{ //lista de objetos 
    rua: ' Rua Joseph Climber',
    numero: '45',
    complemento: 'Apto 43 '

 }]

}

estudante.endereco.push({
    rua: ' Rua Clothilde',
    numero: '87',
    complemento: ''
})

//console.log(estudante.endereco)
//console.log(estudante.endereco[0]) 

const listaEndComplementos = estudante.endereco.filter((endereco)=>endereco.complemento)
console.log(listaEndComplementos) // vai mostrar o complemento que tver valor 