// Encadeamento opcional e Operador de coalência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

console.log(
  documento.data?.toDateString() ?? 'Infelizmente não existe valor em data.',
);
