import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DemandaCon } from '../../classes/Demanda';
import { DemandasService } from '../../shared/services/demandas.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-demandas',
    templateUrl: './demandas.component.html',
    styleUrls: ['./demandas.component.scss'],
    animations: [routerTransition()]
})
export class DemandasComponent implements OnInit {
    demandas: DemandaCon[];
    rol: number;
    public search: string;
    constructor(private _DService: DemandasService, private toastr: ToastrService, private router: Router) {
        try {
            this.rol = JSON.parse(sessionStorage.getItem('User'))[0].RolClave;
        } catch (Error) { }
     }

    ngOnInit() {
        this._DService.getDemadnasByRol(this.rol ).subscribe(
            data => {
                if (data.length !== 0) {
                    this.demandas = data;
                } else {
                    this.toastr.error('No hay Demandas Registradas');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
            });
    }
    agregar() {
        this.router.navigate(['/mDemanda']);
    }
}
