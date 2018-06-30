import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDocRoutingModule } from './mDoc-routing.module';
import { MDocComponent } from './mDoc.component';

import { PageHeaderModule } from './../../../../shared';

@NgModule({
    imports: [CommonModule, MDocRoutingModule, PageHeaderModule],
    declarations: [MDocComponent]
})
export class MDocModule {}
