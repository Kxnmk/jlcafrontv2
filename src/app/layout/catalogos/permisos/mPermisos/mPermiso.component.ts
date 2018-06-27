import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogosServiceService} from './../../../../shared/services/catalogos-service.service';
// Toast
import { ToastrService } from 'ngx-toastr';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Rol, RolC } from '../../../../classes/Rol';
import { Status, StatusC, StatusCon } from '../../../../classes/Status';


@Component({
    selector: 'app-mPermiso',
    templateUrl: './mPermiso.component.html',
    styleUrls: ['./mPermiso.component.scss'],
    animations: [routerTransition()]
})
export class MPermisoComponent implements OnInit {
    private parms: any;

    private index: number;
    public rol: Rol;
    public statusR: StatusCon[];

    clave;
    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _Cservice: CatalogosServiceService) {
            this.rol = new RolC();
        }

    ngOnInit() {

        const fclave = <HTMLInputElement>document.getElementById('MesClave');
        this.parms = this.route.params.subscribe(params => {
            try {
                this.index = +params['id'];

                if ( !isNaN(this.index) ) {
                    this._Cservice.getRoles().subscribe(
                        data => {
                            if (data.length !== 0) {
                                this.rol = data[this.index];

                                this._Cservice.getStatusOfRol(this.index).subscribe(
                                    data1 => {
                                        this.statusR = data1;
                                    }
                                );
                            } else {
                                this.toastr.error('Usuario o contraseña no valida intente de nuevo');
                            }
                        },
                        err => {
                            console.log(err);
                            this.toastr.error('Error en el servidor');
                        });

                }

            } catch (err) {


            }
        });



    }


    guardar() {
        const btn = <HTMLInputElement>document.getElementById('btnGuardar');
        btn.style.display = 'none';

        const clave = (<HTMLInputElement>document.getElementById('RolClave')).value;
        const nStatus = new StatusC();
        nStatus.SRClaveRol = this.rol.RolClave;
        for (let i = 0; i < this.statusR.length ; i++) {
            const ac = 'chk' + i;
            const check = (<HTMLInputElement>document.getElementById(ac));
            nStatus.SRClaveSta = i;
            if (check.checked) {
                nStatus.Permiso = 'allow';
            } else {
                nStatus.Permiso = 'deny';
            }

            this._Cservice.storeStatus(nStatus).subscribe(
                status => {
                    if (status.message === 'Success') {
                        btn.disabled = false;

                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }
            );

        }

        this.toastr.success('Permisos Guardados');
        this.router.navigate(['/permisos']);



    }


}