export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  sala: string;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES ');
    return super.getNomeCompleto();
  }
}
export class Client extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente:' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Leonardo', 'Henrique', 15, '000.000.000-00');
const aluno = new Aluno('Leonardo', 'Henrique', 15, '000.000.000-00', '0001');
const cliente = new Client('Leonardo', 'Henrique', 15, '000.000.000-00');

console.log(pessoa);
console.log(aluno);
console.log(cliente);
console.log(aluno);
