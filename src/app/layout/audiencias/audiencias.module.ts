import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudienciasRoutingModule } from './audiencias-routing.module';
import { AudienciasComponent } from './audiencias.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AudienciasRoutingModule, PageHeaderModule],
    declarations: [AudienciasComponent]
})
export class AudienciasModule {}
