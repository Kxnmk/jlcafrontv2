import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UrlServ } from '../global-setting';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../classes/Usuario';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    uLog: Usuario[];
    constructor(private _http: HttpClient, public router: Router) {}

    ngOnInit() {}

    onLoggedin() {
    }
    checkLoggin() {
        const usuario = (<HTMLInputElement>document.getElementById('usuario')).value;
        const password = (<HTMLInputElement>document.getElementById('password')).value;
        const cred = { usrName: usuario, usrPassword: password };

        console.log(UrlServ + '/usuarios/auth');
        this._http.post<Usuario[]>(UrlServ + '/usuarios/auth', cred).subscribe(
            data => {
                if (data.length !== 0) {
                    this.uLog = data;
                    sessionStorage.setItem('User', JSON.stringify(this.uLog));
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/dashboard']);
                } else {
                    //this._alert.create('error', 'Usuario o contraseña no valida intente de nuevo', Alert_settings);
                    console.log('Usuario o contraseña no valida');
                }
            },
            err => {
                console.log(err);
                //this._alert.create('error', 'Error en el servidor');
                console.log('Error en el servidor');
            });
    }

    }
