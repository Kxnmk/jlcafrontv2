import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioServiceService} from './../../../../shared/services/usuario-service.service';
import { Usuario, UsuarioC, UsuarioGC, UsuarioG } from '../../../../classes/Usuario';
import { Rol, RolC } from '../../../../classes/Rol';
// Toast
import { ToastrService } from 'ngx-toastr';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Mesa } from '../../../../classes/mesa';


@Component({
    selector: 'app-musuario',
    templateUrl: './mUsuario.component.html',
    styleUrls: ['./mUsuario.component.scss'],
    animations: [routerTransition()]
})
export class MusuarioComponent implements OnInit {
    private parms: any;
    public user: Usuario;
    private index: number;
    public roles: Rol[];
    private form: FormGroup;
    public mesas: Mesa[];
    public hd = true;
    public mesa = false;

    private action = 'creacion';
    private nextId: number;
    clave;
    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _Uservice: UsuarioServiceService) {
            this.user = new UsuarioGC();
        }

    ngOnInit() {



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
        this._Uservice.getMesas().subscribe(
            data => {
                if (data.length !== 0) {
                    this.mesas = data;
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


                    console.log('Modificaciones');

                    this.action = 'mod';
                    this.hd = true;




                    this._Uservice.getUsuarios().subscribe(
                        data => {
                            if (data.length !== 0) {
                                this._Uservice.setUsuarios(data);
                                this.user = this._Uservice.getUsuariobyId(this.index);
                                if (this.user.RolNombre === 'MES_A' ) {
                                    this.mesa = true;
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
                    this.hd = false;
                }
            } catch (err) {
            }
        });




    }

    showMesa(rol) {
        if (+rol === 4) {
            this.mesa = true;
        } else {
            this.mesa = false;
        }

    }

    borrar() {
        const fclave = <HTMLInputElement>document.getElementById('usrClave');
        this._Uservice.deleteUsuario(+fclave.value).subscribe(
            status => {
                if (status.message === 'Success') {
                    this.toastr.success('Usuario Borrado');
                    this.router.navigate(['/usuarios']);
                } else {
                    this.toastr.error('Error en el servidor');
                }
            }

        );

    }


    guardar() {
        let clave, mesaS;
        const btn = <HTMLInputElement>document.getElementById('btnGuardar');
        btn.style.display = 'none';


        const nombre = (<HTMLInputElement>document.getElementById('usrNombre')).value;
        const usuario = (<HTMLInputElement>document.getElementById('usrName')).value;
        const password = (<HTMLInputElement>document.getElementById('usrPassword')).value;
        const rol = (<HTMLInputElement>document.getElementById('usrRol')).value;


        const nuser = new UsuarioG();

        nuser.usrNombre = nombre;
        nuser.usrName = usuario;
        nuser.usrPassword = password;
        nuser.usrRol = +rol;
        nuser.usrRandom = 'U-' + (Math.floor(Math.random() * (10000 - 100)) + 100);

        const d = new Date();
        nuser.fechaAsignacion = d.toISOString();

        if (this.hd) {
            clave = (<HTMLInputElement>document.getElementById('usrClave')).value;
            nuser.usrClave = +clave;
        }
        if (this.mesa) {
            mesaS = (<HTMLInputElement>document.getElementById('usrMesa')).value;
            nuser.claveMesa = +mesaS;
        } else {
            nuser.claveMesa = null;
        }


        console.log(nuser);



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
