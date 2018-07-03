export interface AudienciaC {
    AudClave?: number;
    AudFecha: string;
    AudHora: string;
    AudClaveMesa: number;
    AudClaveDemanda: number;
    AudNotas: string;
    MesNombre: string;
    DemFolio: string;
    DemTipo?: string;
}
export class AudienciaCo {
    AudClave?: number;
    AudFecha: string;
    AudHora: string;
    AudClaveMesa: number;
    AudClaveDemanda: number;
    AudNotas: string;
    MesNombre: string;
    DemFolio: string;
    DemTipo: string;
}

export class Audiencia {
    AudClave?: number;
    AudFecha: string;
    AudHora: string;
    AudClaveMesa: number;
    AudClaveDemanda: number;
    AudNotas: string;
    AudienciaC() {
    }
}
