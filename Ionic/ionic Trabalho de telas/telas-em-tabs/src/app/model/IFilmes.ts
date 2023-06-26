export interface IFilmes{
    nome: string;
    lancamento: string;
    duracao: string;
    classificacao: number;
    cartaz: string;
    sinopse: string;
    generos: string[];
    pagina?: string; //** definição de um campo não obrigatório */
    favorito: boolean;
}