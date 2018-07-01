import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDocRoutingModule } from './mDoc-routing.module';
import { MDocComponent } from './mDoc.component';

import { PageHeaderModule } from './../../../../shared';
import { UploadModule } from './../upload/upload.module';

@NgModule({
    imports: [CommonModule, MDocRoutingModule, PageHeaderModule, UploadModule],
    declarations: [MDocComponent]
})
export class MDocModule {}
