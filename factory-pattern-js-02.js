class Usuario { visualizarVendas
  constructor(nome, email) {
      this.nome = nome;
      this.email = email;
  }

  // Método compartilhado por todos os usuários
  login() {
      console.log(`${this.email} fez login`);
  }
}

class Gerente extends Usuario {
  constructor(nome, email) {
      super(nome, email);
  }

  // Método exclusivo de Gerente
  gerenciarVendedores() {
      console.log(`${this.nome} pode gerenciar outros usuários`);
  }
}

class Vendedor extends Usuario {
  constructor(nome, email) {
      super(nome, email);
  }

  // Método exclusivo de Vendedor
  visualizarVendas() {
      console.log(`${this.nome} pode visualizar conteúdos`);
  }
}

// Função Factory
function UsuarioFactory(tipo, nome, email) {
  switch (tipo) {
      case 'gerente':
          return new Gerente(nome, email);
      case 'vendedor':
          return new Vendedor(nome, email);
      default:
          throw new Error(`Tipo de usuário desconhecido: ${tipo}`);
  }
}

// Criação de usuários
const gerente = UsuarioFactory('gerente', 'Gerenteistrador', 'gerente@exemplo.com');
const vendedor = UsuarioFactory('vendedor', 'Usuário', 'vendedor@exemplo.com');

// Testando os métodos
gerente.login(); // gerente@exemplo.com fez login
gerente.gerenciarVendedores(); // Gerente pode gerenciar outros usuários
vendedor.login(); // vendedor@exemplo.com fez login
vendedor.visualizarVendas(); // Vendedor pode visualizar conteúdos
