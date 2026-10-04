const estudante = require('./estudante.json')
 // caminho do arquivo que eu quero importar

 //console.log(estudante); // valores do objeto
 //console.log(typeof(estudante));// tipo objeto
 const chaves = Object.keys(estudante);
 console.log(chaves); // mostra um array com as informações 

 //precisamos converter para usar os objetos 