export interface ComisionC {
    ComClave?: number;
    ComClaveMesa?: number;
    ComClaveUsuario: number;
    ComFechaAsignacion: string;
    ComClaveRol: number;
    MesNombre?: string;
    usrNombre: string;
    RolDescripcion: string;
}
export class ComisionCo {
    ComClave?: number;
    ComClaveMesa?: number;
    ComClaveUsuario: number;
    ComFechaAsignacion: string;
    ComClaveRol: number;
    MesNombre?: string;
    usrNombre: string;
    RolDescripcion: string;
}

export class Comision {
    ComClave?: number;
    ComClaveMesa?: number;
    ComClaveUsuario: number;
    ComClaveRol: number;
    AudienciaC() {
    }
}
