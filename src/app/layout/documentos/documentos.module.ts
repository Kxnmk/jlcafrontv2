import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, DocumentosRoutingModule, PageHeaderModule],
    declarations: [DocumentosComponent]
})
export class DocumentosModule {}
