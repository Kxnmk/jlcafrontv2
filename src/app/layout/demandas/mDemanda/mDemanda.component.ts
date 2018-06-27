import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

import { Actor, ActorC } from '../../../classes/Actor';
import { Rol } from '../../../classes/Rol';
// Toast
import { ToastrService } from 'ngx-toastr';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { style } from '@angular/animations';
import { DemandaCon, DemandaConC } from '../../../classes/Demanda';
import { DemandasService } from '../../../shared/services/demandas.service';
import { Demandado } from '../../../classes/Demandado';


@Component({
    selector: 'app-mDemanda',
    templateUrl: './mDemanda.component.html',
    styleUrls: ['./mDemanda.component.scss'],
    animations: [routerTransition()]
})
export class MDemandaComponent implements OnInit {
    private parms: any;
    public demanda: DemandaCon;
    private index: number;
    private action = 'creacion';
    private nextId: number;
    private rol: number;
    public actores: Actor[];
    public demandados: Demandado[];
    clave;
    
    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _DService: DemandasService) {
            this.demanda = new DemandaConC();

            try {
                this.rol = JSON.parse(sessionStorage.getItem('User'))[0].RolClave;
            } catch (Error) { }

            this._DService.getActores().subscribe(
                data => {
                    if (data.length !== 0) {
                        this.actores = data;
                    } else {
                        this.toastr.error('Error al obtener informacion');

                    }
                },
                err => {
                    console.log(err);
                    this.toastr.error('Error en el servidor');

                });

        this._DService.getDemandados().subscribe(
            data => {
                if (data.length !== 0) {
                    this.demandados = data;
                } else {
                    this.toastr.error('Error al obtener informacion');

                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');

            });

        }

    ngOnInit() {

        const fclave = <HTMLInputElement>document.getElementById('DemFolio');
        this.parms = this.route.params.subscribe(params => {
            try {
                this.index = +params['id'];

                if ( !isNaN(this.index) ) {
                    fclave.disabled = true;

                    this.action = 'mod';


                    this._DService.getDemadnasByRol(this.rol).subscribe(
                        data => {
                            if (data.length !== 0) {
                                this._DService.setDemandas(data);
                                this.demanda = this._DService.getDemandaById(this.index);
                            } else {
                                this.toastr.error('Error al obtener informacion');

                            }
                        },
                        err => {
                            console.log(err);
                            this.toastr.error('Error en el servidor');

                        });
                } else {

                    this._DService.getDemadnasByRol(this.rol).subscribe(
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
        // const btn = <HTMLInputElement>document.getElementById('btnGuardar');
        // btn.style.display = 'none';

        // const clave = (<HTMLInputElement>document.getElementById('DeoClave')).value;
        // const nombre = (<HTMLInputElement>document.getElementById('DeoNombre')).value;
        // const domicilio = (<HTMLInputElement>document.getElementById('DeoDomicilio')).value;
        // const telefono = (<HTMLInputElement>document.getElementById('DeoTelefono')).value;
        // const correo = (<HTMLInputElement>document.getElementById('DeoCorreo')).value;
        // const nombrs = (<HTMLInputElement>document.getElementById('DeoNombres')).value;
        // const moral = (<HTMLInputElement>document.getElementById('DeoMoral')).value;
        // const nDemandado = new DemandadoC();
        // nDemandado.DeoClave = +clave;
        // nDemandado.DeoNombre = nombre;
        // nDemandado.DeoDomicilio = domicilio;
        // nDemandado.DeoTelefono = telefono;
        // nDemandado.DeoCorreo = correo;
        // nDemandado.DeoNombreRepresentantes = nombrs;
        // nDemandado.DeoMoral = +moral;




        // if (this.action === 'mod') {
        //     this._Cservice.updateDemandado(nDemandado).subscribe(
        //         status => {
        //             if (status.message === 'Success') {
        //                 this.toastr.success('Demandado Guardado');
        //                 btn.disabled = false;
        //                 this.router.navigate(['/demandados']);
        //             } else {
        //                 this.toastr.error('Error en el servidor');
        //             }
        //         }

        //     );
        // } else {
        //     this._Cservice.addDemandado(nDemandado).subscribe(
        //         status => {
        //             if (status.message === 'Success') {
        //                 this.toastr.success('Demandado Guardado');
        //                 btn.disabled = false;
        //                 this.router.navigate(['/demandados']);
        //             } else {
        //                 this.toastr.error('Error en el servidor');
        //             }
        //         }
        //     );
        // }


    }


}