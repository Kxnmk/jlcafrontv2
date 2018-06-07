import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComisionesRoutingModule } from './comisiones-routing.module';
import { ComisionesComponent } from './comisiones.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ComisionesRoutingModule, PageHeaderModule],
    declarations: [ComisionesComponent]
})
export class ComisionesModule {}
