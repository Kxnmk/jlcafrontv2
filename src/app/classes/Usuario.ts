export interface Usuario {
    // user: string;
    // pass: string;
    // rol: string;

    usrClave: number;
    usrNombre: string;
    usrRol?: string;
    usrName: string;
    usrPassword?: string;
    usrRandom?: string;
    RolNombre: string;
}

export class UsuarioC {
    usrClave: number;
    usrNombre: string;
    usrRol: number;
    usrName: string;
    usrPassword: string;
    usrRandom: string;
    RolNombre: string;
}
