import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlServ } from './../../global-setting';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { DemandaCon, Demanda, DemandaI } from '../../classes/Demanda';
import { Actor } from '../../classes/Actor';
import { Demandado } from '../../classes/Demandado';
import { StaCatalogo, Status, StatusDemanda } from '../../classes/Status';
import { Proy } from '../../classes/Proy';

@Injectable({
  providedIn: 'root'
})
export class DemandasService {
  demandas: DemandaCon[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private _http: HttpClient) {
  }

  // Demandas

  getDemadnasByRol(i: number): Observable<DemandaCon[]> {
    return this._http.get<DemandaCon[]>(UrlServ + '/demandas/' + i);
  }
  setDemandas(demandas: DemandaCon[]) {
    this.demandas = demandas;
  }
  getDemandaById(i: number): DemandaCon {
    let aux: DemandaCon;
    for (const au of this.demandas) {
      if (au.DemClave === i) {
        aux = au;
      }
    }
    return aux;
  }
  countDemandas(): Observable<DemandaI[]> {
    return this._http.get<DemandaI[]>(UrlServ + '/demandas');
  }

  updateDemanda(nDemanda: Demanda): Observable<any> {
    const aux = JSON.stringify(nDemanda);
    return this._http.put<any>(UrlServ + '/demandas/' + nDemanda.DemClave, aux, this.httpOptions);
  }
  addDemanda(nDemanda: Demanda): Observable<any> {
    const aux = JSON.stringify(nDemanda);
    return this._http.post<any>(UrlServ + '/demandas', aux, this.httpOptions);
  }

  // Actores Catalogo
  getActores(): Observable<Actor[]> {
    return this._http.get<Actor[]>(UrlServ + '/actores');
  }

  // Demandados Catalogo
  getDemandados(): Observable<Demandado[]> {
    return this._http.get<Demandado[]>(UrlServ + '/demandados');
  }

  // Estatus status Catalogo
  getStatus(): Observable<StaCatalogo[]> {
    return this._http.get<StaCatalogo[]>(UrlServ + '/status');
  }

  // Update Status
  updateStatusD(nStatus: StatusDemanda): Observable<any> {
    const aux = JSON.stringify(nStatus);
    return this._http.put<any>(UrlServ + '/statusD/' + nStatus.SDClaveDem, aux, this.httpOptions);
  }
  addStatusD(nStatus: StatusDemanda): Observable<any> {
    const aux = JSON.stringify(nStatus);
    return this._http.post<any>(UrlServ + '/statusD', aux, this.httpOptions);
  }

  // Proyectistas Catalogo
  getProyec(): Observable<Proy[]> {
    return this._http.get<Proy[]>(UrlServ + '/proyectistas');
  }
}
