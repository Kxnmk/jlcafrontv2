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
import { DemandaCon, DemandaConC, Demanda } from '../../../classes/Demanda';
import { DemandasService } from '../../../shared/services/demandas.service';
import { Demandado } from '../../../classes/Demandado';
import { Status, StaCatalogo, StatusDemanda } from '../../../classes/Status';


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
    public status: StaCatalogo[];
    private usI: number;

    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _DService: DemandasService) {
            this.demanda = new DemandaConC();

            try {
                this.rol = JSON.parse(sessionStorage.getItem('User'))[0].RolClave;
                this.usI = JSON.parse(sessionStorage.getItem('User'))[0].usrClave;

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

        this._DService.getStatus().subscribe(
            data => {
                if (data.length !== 0) {
                    this.status = data;
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

        const fclave = <HTMLInputElement>document.getElementById('DemClave');
        const ffolio = <HTMLInputElement>document.getElementById('DemFolio');
        this.parms = this.route.params.subscribe(params => {
            try {
                this.index = +params['id'];

                if ( !isNaN(this.index) ) {
                    fclave.disabled = true;
                    ffolio.disabled = true;

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

                    this._DService.countDemandas().subscribe(
                        data => {
                            console.log(data);
                            if (data.length !== 0) {
                                this.nextId = data.length;
                            } else {
                                this.nextId = 0;
                            }
                            fclave.value = '' + (this.nextId + 1);
                        }
                    );

                }

            } catch (err) {


            }
        });



    }


    guardar() {
        const btn = <HTMLInputElement>document.getElementById('btnGuardar');
        btn.style.display = 'none';

        const clave = (<HTMLInputElement>document.getElementById('DemClave')).value;
        const folio = (<HTMLInputElement>document.getElementById('DemFolio')).value;
        const actor = (<HTMLInputElement>document.getElementById('DemClaveActor')).value;
        const demandado = (<HTMLInputElement>document.getElementById('DemClaveDemandado')).value;
        const ciudad = (<HTMLInputElement>document.getElementById('DemCiudad')).value;
        const fecha = (<HTMLInputElement>document.getElementById('DemFecha')).value;
        const tipo = (<HTMLInputElement>document.getElementById('DemTipo')).value;

        const status = (<HTMLInputElement>document.getElementById('demStatus')).value;

        const nDemanda = new Demanda();
        nDemanda.DemClave = +clave;
        nDemanda.DemFolio = folio;
        nDemanda.DemClaveActor = +actor;
        nDemanda.DemClaveDemandado = +demandado;
        nDemanda.DemCiudad = ciudad;
        nDemanda.DemFecha = fecha;
        nDemanda.DemTipo = tipo;

        const stat = new StatusDemanda();
        stat.SDClaveDem = nDemanda.DemClave;
        stat.SDClaveSta = +status;
        stat.SDClaveUsr = this.usI;

        const d = new Date();
        stat.SDTimestamp = d.toISOString();
        stat.SDFechaCambio = d.toISOString();





        if (this.action === 'mod') {
            this._DService.updateDemanda(nDemanda).subscribe(
                status => {
                    if (status.message === 'Success') {
                        btn.disabled = false;
                        this._DService.updateStatusD(stat).subscribe(
                            status => {
                                if (status.message === 'Success') {
                                    this._DService.addStatusD(stat).subscribe(
                                        status => {
                                            this.toastr.success('Demanda Guardada');
                                            this.router.navigate(['/demandas']);
                                            btn.disabled = false;
                                        }
                                    );
                                }
                            }
                        );

                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }

            );
        } else {
            this._DService.addDemanda(nDemanda).subscribe(
                status => {
                    if (status.message === 'Success') {
                        this._DService.addStatusD(stat).subscribe(
                            status => {
                                if (status.message === 'Success') {
                                    this.toastr.success('Demanda Guardada');
                                    this.router.navigate(['/demandas']);
                                    btn.disabled = false;
                                }
                            }
                        );
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }
            );
        }


    }


}