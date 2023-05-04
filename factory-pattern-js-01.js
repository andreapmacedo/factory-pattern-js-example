// Superclasse ou interface para produtos
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  descricao() {
    return `${this.nome} custa R$${this.preco}`;
  }
}

// Subclasses para produtos específicos
class Camiseta extends Produto {
  constructor(nome, preco, tamanho) {
    super(nome, preco);
    this.tamanho = tamanho;
  }
}

class Celular extends Produto {
  constructor(nome, preco, marca) {
    super(nome, preco);
    this.marca = marca;
  }
}

// Função Factory para criar objetos Produto
function criarProduto(tipo, ...args) {
  switch (tipo) {
    case "camiseta":
      return new Camiseta(...args);
    case "celular":
      return new Celular(...args);
    default:
      throw new Error(`Tipo de produto desconhecido: ${tipo}`);
  }
}

// Exemplo de uso
const camiseta = criarProduto("camiseta", "Camiseta Azul", 49.99, "M");
const celular = criarProduto("celular", "iPhone 13", 5999, "Apple");

console.log(camiseta.descricao()); // Camiseta Azul custa R$49.99
console.log(celular.descricao()); // iPhone 13 custa R$5999
