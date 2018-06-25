import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioServiceService} from './../../../../shared/services/usuario-service.service';
import { Usuario, UsuarioC } from '../../../../classes/Usuario';
import { Rol } from '../../../../classes/Rol';
// Toast
import { ToastrService } from 'ngx-toastr';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-musuario',
    templateUrl: './musuario.component.html',
    styleUrls: ['./musuario.component.scss'],
    animations: [routerTransition()]
})
export class MusuarioComponent implements OnInit {
    private parms: any;
    private user: Usuario;
    private index: number;
    private roles: Rol[];
    private form: FormGroup;
    constructor(private route: ActivatedRoute, private toastr: ToastrService, 
        private router: Router, private _Uservice: UsuarioServiceService) {}

    ngOnInit() {

        this._Uservice.getUsuarios().subscribe(
            data => {
                if (data.length !== 0) {
                    this._Uservice.setUsuarios(data);
                    this.parms = this.route.params.subscribe(params => {
                        try {
                            this.index = +params['id'];
                            console.log(+params['id']);
                            this.user = this._Uservice.getUsuariobyId(this.index);
                            console.log(this.user);
                        } catch (err) {
                            console.log(err);
                        }
                    });
                } else {
                    this.toastr.error('Usuario o contraseña no valida intente de nuevo');
                    console.log('Usuario o contraseña no valida');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
                console.log('Error en el servidor');
            });

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

    }

    // onSubmit() {
    //     if (this.form.valid) {
    //         this.toastr.error('Form submitted');
    //     }
    // }
    guardar() {
        const clave = (<HTMLInputElement>document.getElementById('usrClave')).value;
        const nombre = (<HTMLInputElement>document.getElementById('usrNombre')).value;
        const usuario = (<HTMLInputElement>document.getElementById('usrName')).value;
        const password = (<HTMLInputElement>document.getElementById('usrPassword')).value;
        const rol = (<HTMLInputElement>document.getElementById('usrRol')).value;
        const nuser = new UsuarioC();
        nuser.usrClave = +clave;
        nuser.usrNombre = nombre;
        nuser.usrName = usuario;
        nuser.usrPassword = password;
        nuser.usrRol = +rol;
        console.log(JSON.stringify(nuser));
        this.toastr.error('Form submitted');

        this._Uservice.saveUsuario(nuser).subscribe(
            data => {
                if (data.length !== 0) {
                    console.log(data);
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
    }


}