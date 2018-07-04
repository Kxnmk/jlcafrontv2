import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Demandado } from '../../../classes/Demandado';
import { CatalogosServiceService } from '../../../shared/services/catalogos-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-demandados',
    templateUrl: './demandados.component.html',
    styleUrls: ['./demandados.component.scss'],
    animations: [routerTransition()]
})
export class DemandadosComponent implements OnInit {
    demandados: Demandado[];
    public search: string;
    constructor(private _Cservice: CatalogosServiceService, private toastr: ToastrService, private router: Router) { }

    ngOnInit() {
        this._Cservice.getDemandados().subscribe(
            data => {
                if (data.length !== 0) {
                    this.demandados = data;

                } else {
                    this.toastr.info('No hay demandados Registrados');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
            });
    }
    agregar() {
        this.router.navigate(['/mDemandado']);
    }
}
