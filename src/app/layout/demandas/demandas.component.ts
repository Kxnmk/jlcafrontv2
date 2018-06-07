import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-demandas',
    templateUrl: './demandas.component.html',
    styleUrls: ['./demandas.component.scss'],
    animations: [routerTransition()]
})
export class DemandasComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
