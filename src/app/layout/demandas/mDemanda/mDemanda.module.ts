import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDemandaRoutingModule } from './mDemanda-routing.module';
import { MDemandaComponent } from './mDemanda.component';

import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [CommonModule, MDemandaRoutingModule, PageHeaderModule],
    declarations: [MDemandaComponent]
})
export class MDemandaModule {}
