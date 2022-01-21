let fs       = require('fs');
let args     = process.argv.slice(2) // corta os dois primeiros elementos (ignora) pq ele tras argumentos dos caminhos tmb
let fileName = args[0]; // preciso passar o nome de um arquivo existente


fs.readFile(fileName, 'utf8', (error, data) =>{ //leitura, preciso de um arquvio existente
  if (error) {
    throw error; //erro de lançamento, confira os nomes dos arquvivos
  } else {
    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error)=>{ // criar um arquivo com tudo maiusculo do arquivo existente
      if (error){
        throw error;
      }else{
        console.log(`Arquivo em maiusculo gerado com sucesso, o nome do arquivo criado é ${fileName}_Uppercase`)
      }
    })
  }
})

