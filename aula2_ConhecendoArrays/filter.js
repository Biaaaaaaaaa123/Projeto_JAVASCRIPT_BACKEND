const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];
const reprovados = alunos.filter((aluno, indice)=>
{
    return medias[indice]<7; 
    //mostra o nome com menos de 4 letras
})
/**
Quando a função callback retorna verdadeiro, 
ou true, o elemento é adicionado no novo array, 
e quando ela retorna falso, ou false, o elemento é
 descartado.
 */
console.log(reprovados);