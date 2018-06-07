import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-mesas',
    templateUrl: './mesas.component.html',
    styleUrls: ['./mesas.component.scss'],
    animations: [routerTransition()]
})
export class MesasComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
