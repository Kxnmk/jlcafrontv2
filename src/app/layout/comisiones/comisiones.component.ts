import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-comisiones',
    templateUrl: './comisiones.component.html',
    styleUrls: ['./comisiones.component.scss'],
    animations: [routerTransition()]
})
export class ComisionesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
