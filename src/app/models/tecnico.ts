export interface Tecnico {
    id?:         any; // ? - pode ou não passar o id de um técnico;
    nome:     string;
    cpf:      string;
    email:    string;
    senha:    string;
    perfis: string[]; // Array pois pode ter mais de um perfil
    dataCriacao: any;
}
