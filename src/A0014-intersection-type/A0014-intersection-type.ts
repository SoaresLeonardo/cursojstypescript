type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

export const pessoa: Pessoa = {
  nome: 'Leonardo',
  sobrenome: 'Henrique',
  idade: 15,
};

console.log(pessoa);
