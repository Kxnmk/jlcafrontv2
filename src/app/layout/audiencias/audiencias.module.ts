import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudienciasRoutingModule } from './audiencias-routing.module';
import { AudienciasComponent } from './audiencias.component';
import { PageHeaderModule } from './../../shared';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, AudienciasRoutingModule, PageHeaderModule, Ng2SearchPipeModule, FormsModule, ReactiveFormsModule],
    declarations: [AudienciasComponent]
})
export class AudienciasModule {}
