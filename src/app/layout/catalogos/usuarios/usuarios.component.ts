import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss'],
    animations: [routerTransition()]
})
export class UsuariosComponent implements OnInit {
    constructor() {}
    ngOnInit() {}

}
