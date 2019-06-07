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


export interface PessoaFisica {

  id: String;
  nome: String;
  dataNascimento: Date;
  genero: Genero;
  estadoCivil: EstadoCivil;
  etnia: Etnia;
  nomeResponsavel: String;
  nomeDaMae: String;
  email: String;
  enderecos: Array<Endereco>;
  telefones: Array<Telefone>;
  documentos: Array<Documento>;

}
