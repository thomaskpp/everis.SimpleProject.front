import { Colaborador } from './colaborador.model';
import { Pessoa } from './pessoa.model';

export class PessoaColaboradorViewModel {
    Colaborador: Colaborador;
    Pessoa: Pessoa;
}

export enum TipoPessoa {
    Colaborador = 1,
    Cliente = 2,
    Terceiro = 3
}
export enum FuncaoColaborador {
    SA = 1,
    SN = 2,
    STL = 3,
    SPL = 4,
    SK = 5,
    SKL = 6,
    Manager = 7
}

export enum PerfilColaborador {
    Master = 1,
    Lider = 2,
    Colaborador = 3
}
