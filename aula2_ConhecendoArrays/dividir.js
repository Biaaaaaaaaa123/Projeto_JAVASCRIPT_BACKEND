//Divida os alunos da sala abaixo em duas listas com a mesma quantidade de estudantes:

const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
const sala1 = listaEstudantes.slice(0,listaEstudantes.length/2); // carlos não vai aparecer
const sala2 = listaEstudantes.slice(listaEstudantes/2);
console.log(sala1);
console.log(sala2);