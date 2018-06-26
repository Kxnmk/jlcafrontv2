import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogosServiceService} from './../../../../shared/services/catalogos-service.service';
// Toast
import { ToastrService } from 'ngx-toastr';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { style } from '@angular/animations';

import { Mesa, Mesac } from '../../../../classes/mesa';


@Component({
    selector: 'app-mMesa',
    templateUrl: './mMesa.component.html',
    styleUrls: ['./mMesa.component.scss'],
    animations: [routerTransition()]
})
export class MMesaComponent implements OnInit {
    private parms: any;
    public mesa: Mesa;
    private index: number;
    private action = 'creacion';
    private nextId: number;
    clave;
    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _Cservice: CatalogosServiceService) {
            this.mesa = new Mesac();
        }

    ngOnInit() {

        const fclave = <HTMLInputElement>document.getElementById('MesClave');
        this.parms = this.route.params.subscribe(params => {
            try {
                this.index = +params['id'];

                if ( !isNaN(this.index) ) {
                    fclave.disabled = true;

                    this.action = 'mod';


                    this._Cservice.getMesas().subscribe(
                        data => {
                            if (data.length !== 0) {
                                this._Cservice.setMesas(data);
                                this.mesa = this._Cservice.getMesaById(this.index);
                            } else {
                                this.toastr.error('Error al obtener informacion');

                            }
                        },
                        err => {
                            console.log(err);
                            this.toastr.error('Error en el servidor');

                        });
                } else {

                    this._Cservice.getMesas().subscribe(
                        data => {
                            if (data.length !== 0) {

                                fclave.value = '' + (data.length + 1);
                            }
                        },
                        err => {
                            console.log(err);
                        });





                }

            } catch (err) {


            }
        });



    }


    guardar() {
        const btn = <HTMLInputElement>document.getElementById('btnGuardar');
        btn.style.display = 'none';

        const clave = (<HTMLInputElement>document.getElementById('MesClave')).value;
        const nombre = (<HTMLInputElement>document.getElementById('MesNombre')).value;
        const descripcion = (<HTMLInputElement>document.getElementById('MesDescripcion')).value;
        const nMesa = new Mesac();
        nMesa.MesClave = +clave;
        nMesa.MesNombre = nombre;
        nMesa.MesDescripcion = descripcion;


        if (this.action === 'mod') {
            this._Cservice.updateMesa(nMesa).subscribe(
                status => {
                    if (status.message === 'Success') {
                        this.toastr.success('Mesa Guardada');
                        btn.disabled = false;
                        this.router.navigate(['/mesas']);
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }

            );
        } else {
            this._Cservice.addMesa(nMesa).subscribe(
                status => {
                    if (status.message === 'Success') {
                        this.toastr.success('Mesa Guardada');
                        btn.disabled = false;
                        this.router.navigate(['/mesas']);
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }
            );
        }


    }


}