import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
// Toast
import { ToastrService } from 'ngx-toastr';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { style } from '@angular/animations';

import { Mesa, Mesac } from '../../../classes/mesa';
import { Location } from '@angular/common';
import { CatalogosServiceService } from '../../../shared/services/catalogos-service.service';
import { StatusTime } from '../../../classes/Status';


@Component({
    selector: 'app-tLine',
    templateUrl: './tLine.component.html',
    styleUrls: ['./tLine.component.scss'],
    animations: [routerTransition()]
})
export class TLineComponent implements OnInit {
    private parms: any;
    public status: StatusTime[];
    private claveDem: number;

    public title = 'Historico ';
    previousUrl: string;
    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _loc: Location, private _Cservice: CatalogosServiceService) {}

    ngOnInit() {

        this.parms = this.route.params.subscribe(params => {
            try {
                this.claveDem = +params['id'];

                if (!isNaN(this.claveDem) ) {

                    this._Cservice.getStatusDemanda(this.claveDem).subscribe(
                        data => {
                            if (data.length !== 0) {
                                this.status = data;
                                const aux = sessionStorage.getItem('titleDem');
                                this.title = this.title + aux;
                            } else {
                                this.toastr.error('Error al obtener informacion');

                            }
                        },
                        err => {
                            console.log(err);
                            this.toastr.error('Error en el servidor');

                        });
                } else {


                }

            } catch (err) {


            }
        });



    }



    lastPage() {
        this._loc.back();
    }
}