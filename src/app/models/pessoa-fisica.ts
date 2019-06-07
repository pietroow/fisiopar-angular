import { Endereco } from './endereco';
import { Telefone } from './telefone';
import { Documento } from './documento';

enum Genero{
   MASCULINO, FEMININO
}

enum EstadoCivil {
  SOLTEIRO, SOLTEIRA,
  CASADO, CASADA,
  VIUVO, VIUVA,
  DIVORCIADO, DIVORCIADA,
  SEPARADO, SEPARADA
}

enum Etnia {
  INDIGENA, BRANCO,
  PARDO, NEGRO, AMARELO
}


export class PessoaFisica {

  id: string;
  nome: string;
  dataNascimento: Date;
  genero: Genero;
  estadoCivil: EstadoCivil;
  etnia: Etnia;
  nomeResponsavel: string;
  nomeDaMae: string;
  email: string;
  enderecos: Array<Endereco>;
  telefones: Array<Telefone>;
  documentos: Array<Documento>;

}
