import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { UsuarioServiceService } from './../../../shared/services/usuario-service.service';
import { Usuario } from '../../../classes/Usuario';
import { Router } from '@angular/router';
// Toast
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss'],
    animations: [routerTransition()]
})
export class UsuariosComponent implements OnInit {
    usuarios: Usuario[];

    constructor(private _Uservice: UsuarioServiceService, private toastr: ToastrService, private router: Router) {}
    ngOnInit() {
        this._Uservice.getUsuarios().subscribe(
            data => {
                if (data.length !== 0) {
                    this.usuarios = data;
                } else {
                    this.toastr.error('Usuario o contraseña no valida intente de nuevo');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
            });
    }
    agregar() {
        this.router.navigate(['/mUsuario']);
    }

}
