import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComisionC } from '../../classes/Comision';
import { ComisionesService } from '../../shared/services/comisiones.service';


@Component({
    selector: 'app-comisiones',
    templateUrl: './comisiones.component.html',
    styleUrls: ['./comisiones.component.scss'],
    animations: [routerTransition()]
})
export class ComisionesComponent implements OnInit {
    comisiones: ComisionC[];
    public search: string;

    constructor(private _Cservice: ComisionesService, private toastr: ToastrService, private router: Router) {
    }

    ngOnInit() {
        this._Cservice.getComisiones().subscribe(
            data => {
                if (data.length !== 0) {
                    this.comisiones = data;

                } else {
                    this.toastr.error('No hay Comisiones Registradas Contacte al Adminitrador');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
            });
    }
    agregar() {
        this.router.navigate(['/mCom']);
    }
}
