import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UrlServ } from './../../global-setting';
import { HttpHeaders } from '@angular/common/http';
import { Actor } from '../../classes/Actor';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Demandado, DemandadoC } from '../../classes/Demandado';


@Injectable({
  providedIn: 'root'
})
export class CatalogosServiceService {
  actores: Actor[];
  demandados: Demandado[];

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
}
