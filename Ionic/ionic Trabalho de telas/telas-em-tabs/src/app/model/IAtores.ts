export interface IAtores{
    nome: string;
    nascimento: string;
    hist: string;
    classificacao: number;
    foto: string;
    generos: string[];
    pagina?: string; //** definição de um campo não obrigatório */
    favorito: boolean;
}