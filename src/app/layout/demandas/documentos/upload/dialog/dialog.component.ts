import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UploadService } from '../upload.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Documento } from '../../../../../classes/Documento';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('file') file;
  public files: Set<File> = new Set();

  progress;
  canBeClosed = true;
  primaryButtonText = 'Guardar';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;
  docName = '';

  constructor(public dialogRef: MatDialogRef<DialogComponent>, public uploadService: UploadService) { }

  ngOnInit() {
    this.canBeClosed = false;
  }

  addFiles() {
    this.file.nativeElement.click();
    this.uploading = true;
  }

  onFilesAdded() {
    const docnm = (<HTMLInputElement>document.getElementById('DocNombre'));
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      // tslint:disable-next-line:radix
      if (!isNaN( parseInt(key) )) {
        this.files.add(files[key]);
        docnm.value = files[key].name;
        this.canBeClosed = true;
      }
    }
  }

  closeDialog() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      return this.dialogRef.close();
    }

    // set the component state to "uploading"
    this.uploading = true;

    // Crear el objeto documento a enviar para guardar la informacion
    let usuarioClave;
    let demanda;
    try {
      usuarioClave = JSON.parse(sessionStorage.getItem('User'))[0].usrClave;
      demanda = sessionStorage.getItem('demID');
    } catch (error) { }
    const d = new Date();

    const nombre = (<HTMLInputElement>document.getElementById('DocNombre')).value;
    const tipo = (<HTMLInputElement>document.getElementById('DocTipo')).value;
    const copias = (<HTMLInputElement>document.getElementById('DocCantidadCopias')).value;
    const desc = (<HTMLInputElement>document.getElementById('DocDescripcion')).value;
    const notas = (<HTMLInputElement>document.getElementById('DocNotas')).value;

    const nDoc = new Documento();
    nDoc.DocNombre = nombre;
    nDoc.DocTipo = tipo;
    nDoc.DocCantidadCopias = copias;
    nDoc.DocDescripcion = desc;
    nDoc.DocNotas = notas;
    nDoc.DocClaveUsuarioCreado = usuarioClave;
    nDoc.DocClaveDemanda = +demanda;
    nDoc.DocFechaCreacion = d.toISOString();



    // start the upload and save the progress map

    this.progress = this.uploadService.upload(this.files, nDoc);

    // convert the progress map into an array
    const allProgressObservables = [];
    // tslint:disable-next-line:forin
    for (const key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Terminado';

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }

}
