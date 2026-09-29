const notas=[10,6.5,8,7.5];
let soma=0;
// o i é cada um dos valores e não mais as posições
for(let i of notas){
    soma+= i;
}
const media = soma/notas.length;
console.log( `A média das notas é: ${media} `);