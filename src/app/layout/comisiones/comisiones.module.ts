import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComisionesRoutingModule } from './comisiones-routing.module';
import { ComisionesComponent } from './comisiones.component';
import { PageHeaderModule } from './../../shared';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ComisionesRoutingModule, PageHeaderModule, Ng2SearchPipeModule, FormsModule, ReactiveFormsModule],
    declarations: [ComisionesComponent]
})
export class ComisionesModule {}
