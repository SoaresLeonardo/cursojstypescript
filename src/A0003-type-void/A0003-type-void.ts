function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Leonardo',
  sobrenome: 'Henrique',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

export { pessoa };
