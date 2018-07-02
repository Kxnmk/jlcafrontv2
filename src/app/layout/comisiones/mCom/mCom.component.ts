import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

// Toast
import { ToastrService } from 'ngx-toastr';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { ComisionC, ComisionCo, Comision } from '../../../classes/Comision';
import { Rol } from '../../../classes/Rol';
import { Usuario } from '../../../classes/Usuario';
import { ComisionesService } from '../../../shared/services/comisiones.service';
import { Mesac } from '../../../classes/mesa';


@Component({
    selector: 'app-mCom',
    templateUrl: './mCom.component.html',
    styleUrls: ['./mCom.component.scss'],
    animations: [routerTransition()]
})
export class MComComponent implements OnInit {
    private parms: any;
    public comision: ComisionC;
    public usuarios: Usuario[];
    public mesas: Mesac[];
    public roles: Rol[];
    private index: number;
    private action = 'creacion';
    private nextId: number;
    clave;
    rol: number;
    hd = false;
    public mesa = false;

    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _Cservice: ComisionesService) {
            this.comision = new ComisionCo();


        this._Cservice.getMesas().subscribe(
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

        this._Cservice.getUsuarios().subscribe(
            data => {
                if (data.length !== 0) {
                    this.usuarios = data;
                } else {
                    this.toastr.error('Error al obtener informacion');

                }
            },
            err => {
                this.toastr.error('Error en el servidor');

            });

        this._Cservice.getRoles().subscribe(
            data => {
                if (data.length !== 0) {
                    this.roles = data;
                } else {
                    this.toastr.error('Error al obtener informacion');

                }
            },
            err => {
                this.toastr.error('Error en el servidor');

            });

        }



    showMesa(rol) {
        if (+rol === 4) {
            this.mesa = true;
        } else {
            this.mesa = false;
        }

    }

    ngOnInit() {

        const fclave = <HTMLInputElement>document.getElementById('AudClave');

        this.parms = this.route.params.subscribe(params => {
            try {
                this.index = +params['id'];

                if ( !isNaN(this.index) ) {

                    this.hd = true;
                    this.action = 'mod';


                    this._Cservice.getComisiones().subscribe(
                        data => {
                            if (data.length !== 0) {
                                this._Cservice.setComision(data);
                                this.comision = this._Cservice.getComisionById(this.index);
                                if(this.comision.ComClaveRol === 4  ){
                                    this.mesa = true;
                                } else {
                                    this.mesa = false;
                                }

                            } else {
                                this.toastr.error('Error al obtener informacion');

                            }
                        },
                        err => {
                            console.log(err);
                            this.toastr.error('Error en el servidor');

                        });
                } else {



                }

            } catch (err) {


            }
        });



    }


    guardar() {
        const btn = <HTMLInputElement>document.getElementById('btnGuardar');
        btn.style.display = 'none';


        const usuario = (<HTMLInputElement>document.getElementById('ComClaveUsuario')).value;
        const rol = (<HTMLInputElement>document.getElementById('ComClaveRol')).value;


        const nComision = new Comision();
        nComision.ComClaveUsuario = +usuario;
        nComision.ComClaveRol = +rol;
        if (this.mesa) {
            const mesa = (<HTMLInputElement>document.getElementById('usrMesa')).value;
            nComision.ComClaveMesa = +mesa;
        }else {
            nComision.ComClaveMesa = null;
        }

        if (this.comision.ComClaveRol !== +rol) {
            this._Cservice.addComision(nComision).subscribe(
                status => {
                    if (status.message === 'Success') {

                        btn.disabled = false;
                        this.router.navigate(['/comisiones']);
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }
            );

        } else {
            if (this.comision.ComClaveRol === 4) {
                if (this.comision.ComClaveMesa !== nComision.ComClaveMesa) {
                    this._Cservice.addComision(nComision).subscribe(
                        status => {
                            if (status.message === 'Success') {

                                btn.disabled = false;
                                this.router.navigate(['/comisiones']);
                            } else {
                                this.toastr.error('Error en el servidor');
                            }
                        }
                    );
                } else {
                    this.toastr.success('No se Modifico el Rol del Usuario');
                    btn.style.display = 'block';
                }
            } else {
                this.toastr.success('No se Modifico el Rol del Usuario');
                btn.style.display = 'block';
            }
        }



    }


}