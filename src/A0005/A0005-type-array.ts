// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const result = multiplicaArgs(1, 2, 3);
console.log(result);

const result2 = concatenaString('Leonardo', 'Henrique');
console.log(result2);
