//mostra todos os valores que n tem valores 
const estudantes = require('./estudantes.json');

function filtrarPropriedades(lista, propriedade){
    return lista.filter ((estudante)=>{
        return!estudante.endereco.hasOwnProperty(propriedade);

    })
}const listaEnderecosIncompletos = filtrarPropriedades(estudantes, 'cep');
console.log(listaEnderecosIncompletos);