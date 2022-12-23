// Record
const objeto1: Record<string, string | number> = {
  nome: 'Leonardo',
  sobrenome: 'Henrique',
  idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaProtocol>;
// Readonly
type PessoaReadonly = Readonly<PessoaProtocol>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaProtocol = {
  nome: 'Leonardo',
  sobrenome: 'Henrique',
  idade: 30,
};

console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

// Module mode
export default -1;
