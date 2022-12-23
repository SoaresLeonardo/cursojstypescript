interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Leonardo',
  sobrenome: 'Henrique',
  idade: 30,
};

const aluno1: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
};

const aluno2: PessoaProtocolo = {
  nome: 'Leonardo',
  sobrenome: 'Henrique',
  idade: 30,
};

console.log(aluno);
