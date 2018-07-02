import { Injectable } from '@angular/core';
import { AudienciaC, Audiencia } from '../../classes/Audiencia';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlServ } from './../../global-setting';
import { Observable } from 'rxjs';
import { Mesa, Mesac } from '../../classes/mesa';
import { DemandaCon } from '../../classes/Demanda';

@Injectable({
  providedIn: 'root'
})
export class AudienciaService {

  audiencias: AudienciaC[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private _http: HttpClient) {
  }

  // Demandas

  getAudienciasByRol(i: number): Observable<AudienciaC[]> {
    return this._http.get<AudienciaC[]>(UrlServ + '/audiencias/' + i);
  }
  countAudiencias() {
    return this._http.get<AudienciaC[]>(UrlServ + '/audiencias');
  }
  setAudiencias(audiencias: AudienciaC[]) {
    this.audiencias = audiencias;
  }
  getAudienciaById(i: number): AudienciaC {
    return this.audiencias[i];
  }


  updateAudiencia(nAudiencia: Audiencia): Observable<any> {
    const aux = JSON.stringify(nAudiencia);
    return this._http.put<any>(UrlServ + '/audiencias/' + nAudiencia.AudClave, aux, this.httpOptions);
  }
  addAudiencia(nAudiencia: Audiencia): Observable<any> {
    const aux = JSON.stringify(nAudiencia);
    return this._http.post<any>(UrlServ + '/audiencias', aux, this.httpOptions);
  }

  // Mesas Catalogo
  getMesas(): Observable<Mesac[]> {
    return this._http.get<Mesac[]>(UrlServ + '/mesas');
  }

  // Demandas Del rol del Usuario Catalogo
  getDemadnasByRol(i: number): Observable<DemandaCon[]> {
    return this._http.get<DemandaCon[]>(UrlServ + '/demandas/' + i);
  }


}
