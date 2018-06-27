export interface Demanda {
    DemClave?: number;
    DemFolio: string;
    DemClaveActor: string;
    DeoTelefono?: string;
    DeoCorreo?: string;
    DeoNombreRepresentantes?: string;
    DeoMoral?: number;
}

export class DemandaC {
    DeoClave?: number;
    DeoNombre: string;
    DeoDomicilio: string;
    DeoTelefono?: string;
    DeoCorreo?: string;
    DeoNombreRepresentantes?: string;
    DeoMoral?: number;
    DemandadoC() {
    }
}
