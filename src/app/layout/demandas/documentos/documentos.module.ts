import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';
import { PageHeaderModule } from './../../../shared';

import { UploadModule } from './upload/upload.module';

@NgModule({
    imports: [CommonModule, DocumentosRoutingModule, PageHeaderModule, UploadModule],
    declarations: [DocumentosComponent]
})
export class DocumentosModule {}
