import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CatalogosServiceService } from '../../../shared/services/catalogos-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { Rol } from '../../../classes/Rol';

@Component({
    selector: 'app-permisos',
    templateUrl: './permisos.component.html',
    styleUrls: ['./permisos.component.scss'],
    animations: [routerTransition()]
})
export class PermisosComponent implements OnInit {
    roles: Rol[];
    constructor(private _Cservice: CatalogosServiceService, private toastr: ToastrService, private router: Router) { }

    ngOnInit() {
        this._Cservice.getRoles().subscribe(
            data => {
                if (data.length !== 0) {
                    this.roles = data;

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
        this.router.navigate(['/mPermiso']);
    }
}
