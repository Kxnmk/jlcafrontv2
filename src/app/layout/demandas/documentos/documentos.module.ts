import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';
import { PageHeaderModule } from './../../../shared';

import { UploadModule } from './upload/upload.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, DocumentosRoutingModule, PageHeaderModule, UploadModule, Ng2SearchPipeModule, FormsModule, ReactiveFormsModule],
    declarations: [DocumentosComponent]
})
export class DocumentosModule {}
