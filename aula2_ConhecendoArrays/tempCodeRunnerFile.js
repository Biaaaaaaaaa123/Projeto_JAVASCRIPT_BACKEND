const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];
const reprovados = alunos.filter((aluno, indice)=>
{
    return medias[indice]<7; 
    //mostra o nome com menos de 4 letras
})
console.log(reprovados);