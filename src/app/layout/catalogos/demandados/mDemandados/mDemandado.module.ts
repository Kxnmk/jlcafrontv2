import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDemandadoRoutingModule } from './mDemandado-routing.module';
import { MDemandadoComponent } from './mDemandado.component';

import { PageHeaderModule } from './../../../../shared';

@NgModule({
    imports: [CommonModule, MDemandadoRoutingModule, PageHeaderModule],
    declarations: [MDemandadoComponent]
})
export class MDemandadoModule {}
