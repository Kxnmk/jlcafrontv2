export class Demanda {
    DemClave: number;
    DemFolio: string;
    DemClaveActor: number;
    DemClaveDemandado: number;
    DemCiudad: string;
    DemFecha: string;
    DemTipo: string;
    DemComentarios: string;
    DemClaveProyectista?: number;
    DemandadoC() {
    }
}
export interface DemandaI {
    DemClave: number;
    DemFolio: string;
    DemClaveActor: number;
    DemClaveDemandado: number;
    DemCiudad: string;
    DemFecha: string;
    DemTipo: string;
    DemComentarios: string;
    DemClaveProyectista?: number;
}
export interface DemandaCon {
    DemClave: number;
    DemFolio: string;
    DemClaveActor: number;
    DemClaveDemandado: number;
    DemCiudad: string;
    DemFecha: string;
    DemTipo: string;
    DemClaveProyectista?: number;
    ActNombre: string;
    DeoNombre: string;
    StaNombre: string;
    StaClave: number;
    StaDescripcion: string;
    DemComentarios: string;
    SDComentarios?: string;

}
export class DemandaConC {
    DemClave: number;
    DemFolio: string;
    DemClaveActor: number;
    DemClaveDemandado: number;
    DemClaveProyectista?: number;
    DemCiudad: string;
    DemFecha: string;
    DemTipo: string;
    ActNombre: string;
    DeoNombre: string;
    StaNombre: string;
    StaClave: number;
    StaDescripcion: string;
    DemComentarios: string;

}
