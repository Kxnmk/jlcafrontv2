import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-audiencias',
    templateUrl: './audiencias.component.html',
    styleUrls: ['./audiencias.component.scss'],
    animations: [routerTransition()]
})
export class AudienciasComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
