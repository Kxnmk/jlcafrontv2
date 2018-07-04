import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlServ } from './../../global-setting';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { DemandaCon, Demanda, DemandaI } from '../../classes/Demanda';
import { Actor } from '../../classes/Actor';
import { Demandado } from '../../classes/Demandado';
import { StaCatalogo, Status, StatusDemanda } from '../../classes/Status';
import { DocumentoC, Documento } from '../../classes/Documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  documentos: DocumentoC[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private _http: HttpClient) {
  }
  getDocumentosByDemanda(i: number): Observable<DocumentoC[]> {
    return this._http.get<DocumentoC[]>(UrlServ + '/documentos/' + i);
  }
  setDocumentos(docs: DocumentoC[]) {
    this.documentos = docs;
  }

  getDocumentoByID(i: number): DocumentoC {
    let aux: DocumentoC;
    for (const au of this.documentos) {
      // tslint:disable-next-line:triple-equals
      if (au.DocClave == i) {
        aux = au;

      }
    }
    return aux;
  }

  updateDocumento(nDoc: Documento): Observable<any> {
    const aux = JSON.stringify(nDoc);
    return this._http.put<any>(UrlServ + '/documentos/' + nDoc.DocClave, aux, this.httpOptions);
  }
}
