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
export class UsuarioGC {
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

export class UsuarioG {
    usrClave: number;
    usrNombre: string;
    usrName: string;
    usrPassword: string;
    usrRandom?: string;
    usrRol: number;
}



