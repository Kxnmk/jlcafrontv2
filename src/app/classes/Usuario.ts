export interface Usuario {
    usrClave: number;
    usrNombre: string;
    usrRol?: string;
    usrName: string;
    usrPassword?: string;
    usrRandom?: string;
    RolNombre?: string;
    RolDescripcion?: string;
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
