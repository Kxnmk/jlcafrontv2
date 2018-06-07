import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-actores',
    templateUrl: './actores.component.html',
    styleUrls: ['./actores.component.scss'],
    animations: [routerTransition()]
})
export class ActoresComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
