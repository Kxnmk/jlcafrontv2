import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { CatalogosServiceService} from '../../../shared/services/catalogos-service.service';
import { ToastrService } from 'ngx-toastr';
import { Actor } from '../../../classes/Actor';
import { Router } from '@angular/router';

@Component({
    selector: 'app-actores',
    templateUrl: './actores.component.html',
    styleUrls: ['./actores.component.scss'],
    animations: [routerTransition()]
})
export class ActoresComponent implements OnInit {
    actores: Actor[];
    public search: string;
    constructor(private _Cservice: CatalogosServiceService, private toastr: ToastrService, private router: Router) {}

    ngOnInit() {
        this._Cservice.getActores().subscribe(
            data => {
                if (data.length !== 0) {
                    this.actores = data;

                } else {
                    this.toastr.info('No hay Actores Registrados');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
            });
    }
    agregar() {
        this.router.navigate(['/mActor']);
    }
}
