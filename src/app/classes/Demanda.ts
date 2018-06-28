export class Demanda {
    DemClave: number;
    DemFolio: string;
    DemClaveActor: number;
    DemClaveDemandado: number;
    DemCiudad: string;
    DemFecha: string;
    DemTipo: string;
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
}
export interface DemandaCon {
    DemClave: number;
    DemFolio: string;
    DemClaveActor: number;
    DemClaveDemandado: number;
    DemCiudad: string;
    DemFecha: string;
    DemTipo: string;
    ActNombre: string;
    DeoNombre: string;
    StaNombre: string;
    StaClave: number;
    StaDescripcion: string;

}
export class DemandaConC {
    DemClave: number;
    DemFolio: string;
    DemClaveActor: number;
    DemClaveDemandado: number;
    DemCiudad: string;
    DemFecha: string;
    DemTipo: string;
    ActNombre: string;
    DeoNombre: string;
    StaNombre: string;
    StaClave: number;
    StaDescripcion: string;

}
