import { Injectable } from '@angular/core';
import { Usuario, UsuarioC, UsuarioG } from './../../classes/Usuario';
import { Rol } from './../../classes/Rol';
import { HttpClient } from '@angular/common/http';
import { UrlServ } from './../../global-setting';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { DemandaCon, Demanda } from '../../classes/Demanda';
import { Actor } from '../../classes/Actor';
import { Demandado } from '../../classes/Demandado';

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
    return this.demandas[i];
  }

  updateDemanda(nDemanda: Demanda): Observable<any> {
    const aux = JSON.stringify(nDemanda);
    console.log(aux);
    return this._http.put<any>(UrlServ + '/demandas/' + nDemanda.DemClave, aux, this.httpOptions);
  }
  addActor(nDemanda: Demanda): Observable<any> {
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

}
