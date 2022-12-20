export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Leonardo', 'Henrique', 30, '000.000.000-00');
pessoa.cpf = '000.000.000-00';
console.log(pessoa.cpf);
