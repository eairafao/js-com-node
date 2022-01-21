let calc = { //objeto calc que guarda funções

  soma: (x,y) => {
    return x + y
  },

  mult: (x, y) => {
    return x * y;
  },

  divisao: (x,y) => {
    return x / y;
  },

  subtracao: (x, y) => {
    return x - y;
  }
}
module.exports = calc //exportando o objeto para utilizar as funções
