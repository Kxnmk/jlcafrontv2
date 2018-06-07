import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss'],
    animations: [routerTransition()]
})
export class InicioComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
