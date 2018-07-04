import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PDocRoutingModule } from './pDoc-routing.module';
import { PDocComponent } from './pDoc.component';

import { PageHeaderModule } from './../../../../shared';

@NgModule({
    imports: [CommonModule, PDocRoutingModule, PageHeaderModule],
    declarations: [PDocComponent]
})
export class PDocModule {}
