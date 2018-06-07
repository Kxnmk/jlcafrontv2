import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandadosRoutingModule } from './demandados-routing.module';
import { DemandadosComponent } from './demandados.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [CommonModule, DemandadosRoutingModule, PageHeaderModule],
    declarations: [DemandadosComponent]
})
export class DemandadosModule {}
