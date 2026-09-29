const alunos =['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10,8,7.5,9];

const lista = [alunos,medias];

function exibeNomeENota(aluno){
    const nomeNormalizado = aluno.toLowerCase();
    const nomes = lista[0].map(nome => nome.toLowerCase());

    if(nomes.includes(nomeNormalizado)){
        const indice = nomes.indexOf(nomeNormalizado);
        const mediaAluno = lista[1][indice];
        console.log(`${lista[0][indice]} tem a media ${mediaAluno}`);

    } else {
        console.log('Não existe na lista');
    }
}
// procura o nome na lista e depois ele mostra a média 
exibeNomeENota('Juliana'); 
exibeNomeENota('Vini');