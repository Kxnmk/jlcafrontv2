import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAudRoutingModule } from './mAud-routing.module';
import { MAudComponent } from './mAud.component';

import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [CommonModule, MAudRoutingModule, PageHeaderModule],
    declarations: [MAudComponent]
})
export class MAudModule {}
