import { Injectable } from '@angular/core';
import { Usuario} from './../../classes/Usuario';
import { HttpClient } from '@angular/common/http';
import { UrlServ } from './../../global-setting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  usuarios: Usuario[] = [];

  constructor(private _http: HttpClient ) {
    this.usuarios = new Array<Usuario>();
  }

  getUsuarios(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(UrlServ + '/usuarios');
  }
  setUsuarios(usuarios: Usuario[]) {
    this.usuarios = usuarios;
  }
  getUsuariosO(): Usuario[] {
    return this.usuarios;
  }
}
