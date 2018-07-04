import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AudienciaC } from '../../classes/Audiencia';
import { AudienciaService } from '../../shared/services/audiencia.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-audiencias',
    templateUrl: './audiencias.component.html',
    styleUrls: ['./audiencias.component.scss'],
    animations: [routerTransition()]
})
export class AudienciasComponent implements OnInit {
    audiencias: AudienciaC[];
    rol: number;
    public search: string;
    constructor(private _Aservice: AudienciaService, private toastr: ToastrService, private router: Router) {
        try {
            this.rol = JSON.parse(sessionStorage.getItem('User'))[0].RolClave;
        } catch (Error) { }
    }

    ngOnInit() {
        this._Aservice.getAudienciasByRol(this.rol).subscribe(
            data => {
                if (data.length !== 0) {
                    this.audiencias = data;

                } else {
                    this.toastr.info('No existen Audiencias Programadas Para ti');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
            });
    }
    agregar() {
        this.router.navigate(['/mAud']);
    }
}
