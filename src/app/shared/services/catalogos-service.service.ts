import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UrlServ } from './../../global-setting';
import { HttpHeaders } from '@angular/common/http';
import { Actor } from '../../classes/Actor';
import { Status, StatusCon, StatusTime } from '../../classes/Status';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Demandado, DemandadoC } from '../../classes/Demandado';
import { Mesa } from '../../classes/mesa';

import { Rol } from './../../classes/Rol';


@Injectable({
  providedIn: 'root'
})
export class CatalogosServiceService {
  actores: Actor[];
  demandados: Demandado[];
  mesas: Mesa[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private _http: HttpClient ) { }

  // Actores

  getActores(): Observable<Actor[]> {
    return this._http.get<Actor[]>(UrlServ + '/actores');
  }
  setActores(actores: Actor[]) {
    this.actores = actores;
  }
  getActorbyId(i: number): Actor {
    return this.actores[i];
  }

  updateActor(nActor: Actor): Observable<any> {
    const aux = JSON.stringify(nActor);
    console.log(aux);
    return this._http.put<any>(UrlServ + '/actores/' + nActor.ActClave, aux, this.httpOptions);
  }
  addActor(nActor: Actor): Observable<any> {
    const aux = JSON.stringify(nActor);
    return this._http.post<any>(UrlServ + '/actores' , aux, this.httpOptions);
  }

  // Demandados
  getDemandados(): Observable<Demandado[]> {
    return this._http.get<Demandado[]>(UrlServ + '/demandados');
  }
  setDemandados(demandados: Demandado[]) {
    this.demandados = demandados;
  }
  getDemandadobyId(i: number): Demandado {
    return this.demandados[i];
  }

  updateDemandado(nDemandado: Demandado): Observable<any> {
    const aux = JSON.stringify(nDemandado);
    console.log(aux);
    return this._http.put<any>(UrlServ + '/demandados/' + nDemandado.DeoClave, aux, this.httpOptions);
  }
  addDemandado(nDemandado: Demandado): Observable<any> {
    const aux = JSON.stringify(nDemandado);
    return this._http.post<any>(UrlServ + '/demandados', aux, this.httpOptions);
  }

  // Mesas
  getMesas(): Observable<Mesa[]> {
    return this._http.get<Mesa[]>(UrlServ + '/mesas');
  }
  setMesas(mesas: Mesa[]) {
    this.mesas = mesas;
  }
  getMesaById(i: number): Mesa {
    return this.mesas[i];
  }

  updateMesa(nMesa: Mesa): Observable<any> {
    const aux = JSON.stringify(nMesa);
    return this._http.put<any>(UrlServ + '/mesas/' + nMesa.MesClave, aux, this.httpOptions);
  }
  addMesa(nMesa: Mesa): Observable<any> {
    const aux = JSON.stringify(nMesa);
    return this._http.post<any>(UrlServ + '/mesas', aux, this.httpOptions);
  }

  // Permisos
  getRoles(): Observable<Rol[]> {
    return this._http.get<Rol[]>(UrlServ + '/roles');
  }
  getStatus(): Observable<Status[]>{
    return this._http.get<Status[]>(UrlServ + '/statusRol');
  }
  getStatusOfRol(idRol: number): Observable<StatusCon[]> {
    idRol++;
    return this._http.get<StatusCon[]>(UrlServ + '/statusRol/' + idRol);
  }
  storeStatus(st: Status): Observable<any> {
    return this._http.put<any>(UrlServ + '/statusRol/' + st.SRClaveRol, st, this.httpOptions);
  }

  // Status Demanda
  getStatusDemanda(i: number): Observable<StatusTime[]> {
    return this._http.get<StatusTime[]>(UrlServ + '/statusD/' + i);
  }
}
