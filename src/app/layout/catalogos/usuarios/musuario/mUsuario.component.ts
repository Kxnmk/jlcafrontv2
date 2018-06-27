import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioServiceService} from './../../../../shared/services/usuario-service.service';
import { Usuario, UsuarioC, UsuarioGC, UsuarioG } from '../../../../classes/Usuario';
import { Rol } from '../../../../classes/Rol';
// Toast
import { ToastrService } from 'ngx-toastr';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-musuario',
    templateUrl: './mUsuario.component.html',
    styleUrls: ['./mUsuario.component.scss'],
    animations: [routerTransition()]
})
export class MusuarioComponent implements OnInit {
    private parms: any;
    private user: Usuario;
    private index: number;
    private roles: Rol[];
    private form: FormGroup;

    private action = 'creacion';
    private nextId: number;
    clave;
    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _Uservice: UsuarioServiceService) {
            this.user = new UsuarioGC();
        }

    ngOnInit() {

        const fclave = <HTMLInputElement>document.getElementById('usrClave');
        this._Uservice.getRoles().subscribe(
            data => {
                if (data.length !== 0) {
                    this.roles = data;
                } else {
                    this.toastr.error('Error al traer la información');
                    console.log('Usuario o contraseña no valida');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
                console.log('Error en el servidor');
            });
        this.parms = this.route.params.subscribe(params => {
            try {
                this.index = +params['id'];

                if (!isNaN(this.index)) {
                    fclave.disabled = true;

                    this.action = 'mod';


                    this._Uservice.getUsuarios().subscribe(
                        data => {
                            if (data.length !== 0) {
                                this._Uservice.setUsuarios(data);
                                this.user = this._Uservice.getUsuariobyId(this.index);
                            } else {
                                this.toastr.error('Error al obtener informacion');

                            }
                        },
                        err => {
                            console.log(err);
                            this.toastr.error('Error en el servidor');

                        });
                } else {

                    this._Uservice.getUsuarios().subscribe(
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

        const clave = (<HTMLInputElement>document.getElementById('usrClave')).value;
        const nombre = (<HTMLInputElement>document.getElementById('usrNombre')).value;
        const usuario = (<HTMLInputElement>document.getElementById('usrName')).value;
        const password = (<HTMLInputElement>document.getElementById('usrPassword')).value;
        const rol = (<HTMLInputElement>document.getElementById('usrRol')).value;
        const nuser = new UsuarioG();
        nuser.usrClave = +clave;
        nuser.usrNombre = nombre;
        nuser.usrName = usuario;
        nuser.usrPassword = password;
        nuser.usrRol = +rol;



        if (this.action === 'mod') {
            this._Uservice.updateUsuario(nuser).subscribe(
                status => {
                    if (status.message === 'Success') {
                        this.toastr.success('Usuario Guardado');
                        btn.disabled = false;
                        this.router.navigate(['/usuarios']);
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }

            );
        } else {
            this._Uservice.addUsuario(nuser).subscribe(
                status => {
                    if (status.message === 'Success') {
                        this.toastr.success('Usuario Guardado');
                        btn.disabled = false;
                        this.router.navigate(['/usuarios']);
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }
            );
        }


    }

}