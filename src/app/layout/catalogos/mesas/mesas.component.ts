import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CatalogosServiceService } from '../../../shared/services/catalogos-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Mesa } from '../../../classes/mesa';

@Component({
    selector: 'app-mesas',
    templateUrl: './mesas.component.html',
    styleUrls: ['./mesas.component.scss'],
    animations: [routerTransition()]
})
export class MesasComponent implements OnInit {
    mesas: Mesa[];
    constructor(private _Cservice: CatalogosServiceService, private toastr: ToastrService, private router: Router) { }

    ngOnInit() {
        this._Cservice.getMesas().subscribe(
            data => {
                if (data.length !== 0) {
                    this.mesas = data;

                } else {
                    this.toastr.info('No hay mesas Registradas');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
            });
    }
    agregar() {
        this.router.navigate(['/mMesa']);
    }
}
