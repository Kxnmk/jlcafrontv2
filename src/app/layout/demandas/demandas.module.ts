import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandasRoutingModule } from './demandas-routing.module';
import { DemandasComponent } from './demandas.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, DemandasRoutingModule, PageHeaderModule],
    declarations: [DemandasComponent]
})
export class DemandasModule {}
