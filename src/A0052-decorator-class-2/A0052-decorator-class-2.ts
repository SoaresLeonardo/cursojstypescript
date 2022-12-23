function inverteNomeEcor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi', target);
  return class extends target {
    cor: string;
    constructor(...args: any) {
      super(...args);
      this.cor = 'Qualquer coisa';
    }
  };
}

@inverteNomeEcor
export class Animal {
  constructor(public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('roxo');
console.log(animal);
