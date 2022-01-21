let calc = require("./calc") // Importando o objeto calc que contém as funções de calculos

let args = process.argv.slice(2) // corta os dois primeiros elementos (ignora) pq ele tras argumentos dos caminhos tmb

let a = Number(args[1]);
let b = Number(args[2]); 
let c = "";


if(args[0] == 'soma'){
  c = calc.soma(a, b);
  console.log(`A soma de A com B É ${c}`)

}else if(args[0] == 'multiplicacao'){
  c = calc.mult(a, b);
  console.log(`A Multiplicação de A com B É ${c}`)
}
  else if(args[0] == 'divisao'){
    c = calc.divisao(a, b);
    console.log(`A divisao de A com B É ${c}`) 
}
else if(args[0] == 'subtracao'){
  c = calc.subtracao(a, b);
  console.log(`A subtracao de A com B É ${c}`) 
}else{
  c = "Opção inválida"
}

