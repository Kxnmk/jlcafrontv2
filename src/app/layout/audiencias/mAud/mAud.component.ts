import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { AudienciaService } from '../../../shared/services/audiencia.service';
// Toast
import { ToastrService } from 'ngx-toastr';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { style } from '@angular/animations';

import { Mesa, Mesac } from '../../../classes/mesa';
import { AudienciaC, AudienciaCo, Audiencia } from '../../../classes/Audiencia';
import { DemandaCon } from '../../../classes/Demanda';


@Component({
    selector: 'app-mAud',
    templateUrl: './mAud.component.html',
    styleUrls: ['./mAud.component.scss'],
    animations: [routerTransition()]
})
export class MAudComponent implements OnInit {
    private parms: any;
    public audiencia: AudienciaC;
    public demandas: DemandaCon[];
    public mesas: Mesac[];
    private index: number;
    private action = 'creacion';
    private nextId: number;
    clave;
    rol: number;
    hd = false;
    title = 'Agregar Audiencia';

    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _Aservice: AudienciaService) {
            this.audiencia = new AudienciaCo();
            try {
                this.rol = JSON.parse(sessionStorage.getItem('User'))[0].RolClave;
            } catch (Error) { }


        this._Aservice.getDemadnasByRol(this.rol).subscribe(
            data => {
                if (data.length !== 0) {
                    this.demandas = data;
                } else {
                    this.toastr.error('Error al obtener informacion');

                }
            },
            err => {
                this.toastr.error('Error en el servidor');

            });

        this._Aservice.getMesas().subscribe(
            data => {
                if (data.length !== 0) {
                    this.mesas = data;
                } else {
                    this.toastr.error('Error al obtener informacion');

                }
            },
            err => {
                this.toastr.error('Error en el servidor');

            });
        }

    ngOnInit() {

        const fclave = <HTMLInputElement>document.getElementById('AudClave');
        const folio = <HTMLInputElement>document.getElementById('AudDemanda');
        this.parms = this.route.params.subscribe(params => {
            try {
                this.index = +params['id'];

                if ( !isNaN(this.index) ) {

                    this.hd = true;
                    this.action = 'mod';
                    this.title = 'Modificar Audiencia';
                    folio.disabled = true;

                    this._Aservice.getAudienciasByRol(this.rol).subscribe(
                        data => {
                            if (data.length !== 0) {
                                this._Aservice.setAudiencias(data);
                                this.audiencia = this._Aservice.getAudienciaById(this.index);

                            } else {
                                this.toastr.error('Error al obtener informacion');

                            }
                        },
                        err => {
                            console.log(err);
                            this.toastr.error('Error en el servidor');

                        });
                } else {

                    this._Aservice.countAudiencias().subscribe(
                        data => {

                            if (data.length !== 0) {
                                this.nextId = data.length;
                            } else {
                                this.nextId = 0;
                            }
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

        const clave = (<HTMLInputElement>document.getElementById('AudClave')).value;
        const demanda = (<HTMLInputElement>document.getElementById('AudDemanda')).value;
        const mesa = (<HTMLInputElement>document.getElementById('AudClaveMesa')).value;
        const fecha = (<HTMLInputElement>document.getElementById('AudFecha')).value;
        const hora = (<HTMLInputElement>document.getElementById('AudHora')).value;
        const notas = (<HTMLInputElement>document.getElementById('AudNotas')).value;
        const nAud = new Audiencia();
        nAud.AudClave = +clave;
        nAud.AudClaveDemanda = +demanda;
        nAud.AudClaveMesa = +mesa;
        nAud.AudFecha = fecha;
        nAud.AudHora = hora;
        nAud.AudNotas = notas;


        if (this.action === 'mod') {
            this._Aservice.updateAudiencia(nAud).subscribe(
                status => {
                    if (status.message === 'Success') {
                        this.toastr.success('Audiencia Modificada');
                        btn.disabled = false;
                        this.router.navigate(['/audiencias']);
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }

            );
        } else {
            this._Aservice.addAudiencia(nAud).subscribe(
                status => {
                    if (status.message === 'Success') {
                        this.toastr.success('Audiencia Guardada');
                        btn.disabled = false;
                        this.router.navigate(['/audiencias']);
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }
            );
        }


    }


}