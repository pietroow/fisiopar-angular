import { PessoaFisica } from './pessoa-fisica';

enum Especialidade{
    ORTOPEDIA,
    CARDIOVASCULAR,
    PNEUMOFUNCIONAL,
    PEDIATRIA,
    NEUROFUNCIONAL,
    GINECOLOGIA
}


export class Fisioterapeuta extends PessoaFisica {

    especialidade: Especialidade;
    crefito: string;

}
