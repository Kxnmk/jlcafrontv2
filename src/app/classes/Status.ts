export interface Status {
    SRClaveRol: number;
    SRClaveSta: number;
    Permiso: string;
}

export class StatusC {
    SRClaveRol: number;
    SRClaveSta: number;
    Permiso: string;
    StatusC() {
    }
}

export interface StatusCon {
    SRClaveRol: number;
    SRClaveSta: number;
    Permiso: string;
    StaNombre: string;

}

export class StatusConC {
    SRClaveRol: number;
    SRClaveSta: number;
    Permiso: string;
    StaNombre: string;
}

export interface StaCatalogo {
    StaClave: number;
    StaNombre: string;
    StaDescripcion: string;
}

export class StatusDemanda{
    SDClave?: number;
    SDClaveDem: number;
    SDClaveSta: number;
    SDClaveUsr: number;
    SDTimestamp?: string;
    SDFechaCambio?: string;
    SDComentarios?: string;
}
