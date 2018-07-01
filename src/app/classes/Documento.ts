export interface DocumentoC {
    DocClave?: number;
    DocNombre: string;
    DocTipo: string;
    DocCantidadCopias?: string;
    DocDescripcion?: string;
    DocNotas?: string;
    DocFolioDemanda?: number;
    DocClaveUsuarioRecibe: string;
    DocClaveUsuarioCreado: string;
    DocFechaCreacion: string;
    DocClaveDemanda: string;
    DocHash: string;
    DocRuta: string;

}

export class Documento{
    DocClave?: number;
    DocNombre: string;
    DocTipo: string;
    DocCantidadCopias?: string;
    DocDescripcion?: string;
    DocNotas?: string;
    DocFolioDemanda?: number;
    DocClaveUsuarioCreado: string;
    DocFechaCreacion: string;
    DocClaveDemanda: string;
    DocRuta: string;
    DemandadoC() {
    }
}
