import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasERoutingModule } from './consultaE-routing.module';
import { ConsultasEComponent } from './consultaE.component';
import { PageHeaderModule } from './../shared';

@NgModule({
    imports: [CommonModule, ConsultasERoutingModule, PageHeaderModule],
    declarations: [ConsultasEComponent]
})
export class ConsultaEModule {}
