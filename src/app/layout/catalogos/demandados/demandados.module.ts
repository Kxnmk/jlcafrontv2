import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandadosRoutingModule } from './demandados-routing.module';
import { DemandadosComponent } from './demandados.component';
import { PageHeaderModule } from './../../../shared';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, DemandadosRoutingModule, PageHeaderModule, Ng2SearchPipeModule, FormsModule, ReactiveFormsModule],
    declarations: [DemandadosComponent]
})
export class DemandadosModule {}
