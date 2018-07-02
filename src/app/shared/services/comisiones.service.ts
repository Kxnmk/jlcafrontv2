import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlServ } from './../../global-setting';
import { Observable } from 'rxjs';
import { Mesa, Mesac } from '../../classes/mesa';

import { Usuario } from '../../classes/Usuario';
import { Comision, ComisionC } from '../../classes/Comision';
import { Rol } from '../../classes/Rol';

@Injectable({
  providedIn: 'root'
})
export class ComisionesService {

  comisiones: ComisionC[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private _http: HttpClient) {
  }

  // Comisiones

  getComisiones(): Observable<ComisionC[]> {
    return this._http.get<ComisionC[]>(UrlServ + '/comisiones/');
  }

  setComision(audiencias: ComisionC[]) {
    this.comisiones = audiencias;
  }
  getComisionById(i: number): ComisionC {
    return this.comisiones[i];
  }

  addComision(nComision: Comision): Observable<any> {
    const aux = JSON.stringify(nComision);
    return this._http.post<any>(UrlServ + '/comisiones', aux, this.httpOptions);
  }

  // Mesas Catalogo
  getMesas(): Observable<Mesac[]> {
    return this._http.get<Mesac[]>(UrlServ + '/mesas');
  }

  // Catalogo de Usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(UrlServ + '/usuarios');
  }

  // Catalogo de Roles
  getRoles(): Observable<Rol[]> {
    return this._http.get<Rol[]>(UrlServ + '/roles');
  }
}
