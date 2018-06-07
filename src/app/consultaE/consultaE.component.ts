import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-consultae',
    templateUrl: './consultaE.component.html',
    styleUrls: ['./consultaE.component.scss'],
    animations: [routerTransition()]
})
export class ConsultasEComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
