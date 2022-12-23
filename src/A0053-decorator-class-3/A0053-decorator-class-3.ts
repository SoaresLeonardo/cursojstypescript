function inverteNomeEcor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Sou o decorador e recebi' + param1 + ' ' + param2, target);
    return class extends target {
      cor: string;
      constructor(...args: any) {
        super(...args);
        this.cor = 'Qualquer coisa';
      }
    };
  };
}

@inverteNomeEcor('valor1', 'valor2')
export class Animal {
  constructor(public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('roxo');
console.log(animal);
