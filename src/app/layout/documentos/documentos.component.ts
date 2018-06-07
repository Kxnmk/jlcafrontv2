import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-documentos',
    templateUrl: './documentos.component.html',
    styleUrls: ['./documentos.component.scss'],
    animations: [routerTransition()]
})
export class DocumentosComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
