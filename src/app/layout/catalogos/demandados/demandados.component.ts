import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-demandados',
    templateUrl: './demandados.component.html',
    styleUrls: ['./demandados.component.scss'],
    animations: [routerTransition()]
})
export class DemandadosComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
