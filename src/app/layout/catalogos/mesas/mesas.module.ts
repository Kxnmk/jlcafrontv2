import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRoutingModule } from './mesas-routing.module';
import { MesasComponent } from './mesas.component';
import { PageHeaderModule } from './../../../shared';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, MesasRoutingModule, PageHeaderModule, Ng2SearchPipeModule, FormsModule, ReactiveFormsModule],
    declarations: [MesasComponent]
})
export class MesasModule {}
