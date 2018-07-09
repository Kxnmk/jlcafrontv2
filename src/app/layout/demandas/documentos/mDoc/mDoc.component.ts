import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogosServiceService} from './../../../../shared/services/catalogos-service.service';
// Toast
import { ToastrService } from 'ngx-toastr';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { style } from '@angular/animations';

import { Mesa, Mesac } from '../../../../classes/mesa';
import { Location } from '@angular/common';
import { DocumentoC, DocumentoCo, Documento } from '../../../../classes/Documento';
import { DocumentosService } from '../../../../shared/services/documentos.service';
import { UrlServ } from '../../../../global-setting';


@Component({
    selector: 'app-mDoc',
    templateUrl: './mDoc.component.html',
    styleUrls: ['./mDoc.component.scss'],
    animations: [routerTransition()]
})
export class MDocComponent implements OnInit {
    private parms: any;
    public doc: DocumentoC;
    private index: number;
    private action = 'creacion';
    private nextId: number;
    clave;
    previousUrl: string;
    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _Dservice: DocumentosService, private _loc: Location) {
            this.doc = new DocumentoCo();
        }

    ngOnInit() {

        const fclave = <HTMLInputElement>document.getElementById('fClave');
        this.parms = this.route.params.subscribe(params => {
            try {
                this.index = +params['id'];

                if ( !isNaN(this.index) ) {
                    fclave.disabled = true;

                    this.action = 'mod';


                    const demid = +sessionStorage.getItem('demID');
                    this._Dservice.getDocumentosByDemanda(demid).subscribe(
                        data => {
                            if (data.length !== 0) {
                                this._Dservice.setDocumentos(data);
                                this.doc = this._Dservice.getDocumentoByID(this.index);
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


    guardar() {
        const btn = <HTMLInputElement>document.getElementById('btnGuardar');
        btn.style.display = 'none';
        const btnv = <HTMLInputElement>document.getElementById('btnVer');
        btnv.style.display = 'none';

        const clave = (<HTMLInputElement>document.getElementById('DocClave')).value;
        const tipo = (<HTMLInputElement>document.getElementById('DocTipo')).value;
        const copias = (<HTMLInputElement>document.getElementById('DocCantidadCopias')).value;
        const desc = (<HTMLInputElement>document.getElementById('DocDescripcion')).value;
        const notas = (<HTMLInputElement>document.getElementById('DocNotas')).value;

        const nDoc = new Documento();
        nDoc.DocClave = +clave;
        nDoc.DocTipo = tipo;
        nDoc.DocCantidadCopias = copias;
        nDoc.DocDescripcion = desc;
        nDoc.DocNotas = notas;

        this._Dservice.updateDocumento(nDoc).subscribe(
                status => {
                    if (status.message === 'Success') {
                        this.toastr.success('Docuemento Guardado');
                        btn.disabled = false;
                        this.lastPage();
                    } else {
                        this.toastr.error('Error en el servidor');
                    }
                }

            );

    }


    lastPage() {
        this._loc.back();
    }

    descargarArchivo(url) {
        console.log(url);
        const nW = window.open(UrlServ + /upload/ + url);
    }

}