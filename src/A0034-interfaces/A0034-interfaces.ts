type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

type Numero = number | string;

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Leonardo', 'Henrique');
console.log(pessoa.nomeCompleto());
