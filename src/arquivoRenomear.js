let fs       = require('fs');
let args     = process.argv.slice(2) // corta os dois primeiros elementos (ignora) pq ele tras argumentos dos caminhos tmb
let fileName = args[0]; // preciso passar o nome de um arquivo existente
let newName  = args[1]; //caso seja um novo nome


fs.rename(fileName, newName, (error) =>{
  if(error){
    throw error;
  }else{
    console.log(`Arquivo ${fileName} renomeado para ${newName}`)
  }
})