import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { UsuarioServiceService } from './../../../shared/services/usuario-service.service';
import { Usuario } from '../../../classes/Usuario';
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

    constructor(private _Uservice: UsuarioServiceService, private toastr: ToastrService) {}
    ngOnInit() {
        this._Uservice.getUsuarios().subscribe(
            data => {
                if (data.length !== 0) {
                    this.usuarios = data;
                    console.log(this.usuarios);
                } else {
                    this.toastr.error('Usuario o contraseña no valida intente de nuevo');
                    console.log('Usuario o contraseña no valida');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
                console.log('Error en el servidor');
            });
    }

}
