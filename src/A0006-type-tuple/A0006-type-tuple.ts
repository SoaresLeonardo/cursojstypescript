// Tuple
const dadosCliente: readonly [number, string] = [1, 'leonardo'];
const dadosCliente2: [number, string, string] = [1, 'leonardo', 'Henrique'];
const dadosCliente3: [number, string, string?] = [1, 'leonardo'];
const dadosCliente4: [number, string, ...string[]] = [1, 'leonardo'];

// dadosCliente[0] = 2;

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Readonly
const array1: readonly string[] = ['Leonardo', 'Henrique'];
const array2: ReadonlyArray<string> = ['Leonardo', 'Henrique'];

console.log(array1);
console.log(array2);
