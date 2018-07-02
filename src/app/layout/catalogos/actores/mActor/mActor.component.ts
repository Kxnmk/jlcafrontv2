import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogosServiceService} from './../../../../shared/services/catalogos-service.service';
import { Actor, ActorC } from '../../../../classes/Actor';
import { Rol } from '../../../../classes/Rol';
// Toast
import { ToastrService } from 'ngx-toastr';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { style } from '@angular/animations';


@Component({
    selector: 'app-mActor',
    templateUrl: './mActor.component.html',
    styleUrls: ['./mActor.component.scss'],
    animations: [routerTransition()]
})
export class MActorComponent implements OnInit {
    private parms: any;
    public actor: Actor;
    private index: number;
    private action = 'creacion';
    private nextId: number;
    clave;
    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _Cservice: CatalogosServiceService) {
            this.actor = new ActorC();
        }

    ngOnInit() {

        const fclave = <HTMLInputElement>document.getElementById('actClave');
        this.parms = this.route.params.subscribe(params => {
            try {
                this.index = +params['id'];

                if ( !isNaN(this.index) ) {
                    fclave.disabled = true;

                    this.action = 'mod';

                    this._Cservice.getActores().subscribe(
                        data => {
                            if (data.length !== 0) {
                                this._Cservice.setActores(data);
                                this.actor = this._Cservice.getActorbyId(this.index);
                            } else {
                                this.toastr.error('Error al obtener informacion');

                            }
                        },
                        err => {
                            console.log(err);
                            this.toastr.error('Error en el servidor');

                        });
                } else {

                    this._Cservice.getActores().subscribe(
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

        const clave = (<HTMLInputElement>document.getElementById('actClave'));
        const nombre = (<HTMLInputElement>document.getElementById('actNombre')).value;
        const domicilio = (<HTMLInputElement>document.getElementById('ActDomicilio')).value;
        const telefono = (<HTMLInputElement>document.getElementById('ActTelefono')).value;
        const correo = (<HTMLInputElement>document.getElementById('ActCorreo')).value;
        const nota = (<HTMLInputElement>document.getElementById('ActNota')).value;
        const nactor = new ActorC();
        nactor.ActClave = +clave.value;
        nactor.ActNombre = nombre;
        nactor.ActDomicilio = domicilio;
        nactor.ActTelefono = telefono;
        nactor.ActCorreo = correo;
        nactor.ActNota = nota;
        nactor.ActClaveRepresentanteAct = clave.value;

        if (this.action === 'mod') {
            this._Cservice.updateActor(nactor).subscribe(
                status => {
                    if (status.message === 'Success') {
                        this.toastr.success('Actor Guardado');
                        btn.disabled = false;
                        this.router.navigate(['/actores']);
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }

            );
        } else {
            this._Cservice.addActor(nactor).subscribe(
                status => {
                    if (status.message === 'Success') {
                        this.toastr.success('Actor Guardado');
                        btn.disabled = false;
                        this.router.navigate(['/actores']);
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }
            );
        }


    }


}