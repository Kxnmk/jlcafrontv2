import { Injectable } from '@angular/core';
import { Usuario, UsuarioC} from './../../classes/Usuario';
import { Rol } from './../../classes/Rol';
import { HttpClient } from '@angular/common/http';
import { UrlServ } from './../../global-setting';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  usuarios: Usuario[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

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
  getUsuariobyId(i: number): Usuario {
    console.log(this.usuarios);
    return this.usuarios[i];
  }
  getRoles(): Observable<Rol[]>{
    return this._http.get<Rol[]>(UrlServ + '/roles');
  }
  saveUsuario(nUser: UsuarioC): Observable<any>{
    console.log(JSON.stringify(nUser));
    return this._http.post<any>(UrlServ + '/usuarios', JSON.stringify(nUser), this.httpOptions);
  }
}
