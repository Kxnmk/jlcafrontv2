import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRoutingModule } from './mesas-routing.module';
import { MesasComponent } from './mesas.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [CommonModule, MesasRoutingModule, PageHeaderModule],
    declarations: [MesasComponent]
})
export class MesasModule {}
