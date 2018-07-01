import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DocumentoC } from '../../../classes/Documento';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentosService } from '../../../shared/services/documentos.service';

@Component({
    selector: 'app-documentos',
    templateUrl: './documentos.component.html',
    styleUrls: ['./documentos.component.scss'],
    animations: [routerTransition()]
})
export class DocumentosComponent implements OnInit {
    documentos: DocumentoC[];
    demanda: number;
    private parms: any;

    constructor(private toastr: ToastrService, private router: Router,
        private _DService: DocumentosService, private route: ActivatedRoute) {}

    ngOnInit() {

        this.parms = this.route.params.subscribe(params => {
            try {
                this.demanda = +params['id'];
                sessionStorage.setItem('demID', '' + this.demanda);
                this._DService.getDocumentosByDemanda(this.demanda).subscribe(
                    data => {
                        if (data.length !== 0) {
                            this.documentos = data;
                            this._DService.setDocumentos(data);
                        } else {
                            this.toastr.error('Error al obtener informacion');

                        }
                    },
                    err => {
                        console.log(err);
                        this.toastr.error('Error en el servidor');

                    });
            } catch (err) {

            }
        });
    }

    agregar() {
        this.router.navigate(['/mDoc']);
    }
}
