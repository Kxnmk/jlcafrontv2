import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresRoutingModule } from './actores-routing.module';
import { ActoresComponent } from './actores.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [CommonModule, ActoresRoutingModule, PageHeaderModule],
    declarations: [ActoresComponent]
})
export class ActoresModule {}
