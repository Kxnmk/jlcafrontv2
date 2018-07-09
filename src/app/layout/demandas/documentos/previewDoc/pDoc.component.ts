import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

// Toast
import { ToastrService } from 'ngx-toastr';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DocumentosService } from '../../../../shared/services/documentos.service';
import { DocumentoC } from '../../../../classes/Documento';



@Component({
    selector: 'app-pDoc',
    templateUrl: './pDoc.component.html',
    styleUrls: ['./pDoc.component.scss'],
    animations: [routerTransition()]
})
export class PDocComponent implements OnInit {
    private parms: any;
    private claveDoc: number;
    public doc: DocumentoC;
    public uri: string;
    public docName: string;



    constructor(private route: ActivatedRoute, private toastr: ToastrService,
        private router: Router, private _loc: Location, private _Dservice: DocumentosService) {}

    ngOnInit() {
        this.parms = this.route.params.subscribe(params => {
            try {
                this.claveDoc = +params['id'];

                if (!isNaN(this.claveDoc)) {


                    const demid = +sessionStorage.getItem('demID');
                    this._Dservice.getDocumentosByDemanda(demid).subscribe(
                        data => {
                            if (data.length !== 0) {
                                this._Dservice.setDocumentos(data);
                                this.doc = this._Dservice.getDocumentoByID(this.claveDoc);
                                console.log(this.doc);
                                this.uri = this.doc.DocRuta;
                                this.docName = this.doc.DocNombre;
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