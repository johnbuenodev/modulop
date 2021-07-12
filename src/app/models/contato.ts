import { Pessoa } from "./pessoa";

export interface Contato{
    id?: number,
    nome: String,
    telefone: String,
    email: String,
    pessoa: Pessoa
	
}