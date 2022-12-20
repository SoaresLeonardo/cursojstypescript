export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
  }
}

const pessoa = new Pessoa('Leonardo', 'Henrique', 30, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('Leonardo', 'Henrique');
console.log(pessoa);
console.log(pessoa2);
