import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MComRoutingModule } from './mCom-routing.module';
import { MComComponent } from './mCom.component';

import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [CommonModule, MComRoutingModule, PageHeaderModule],
    declarations: [MComComponent]
})
export class MComModule {}
