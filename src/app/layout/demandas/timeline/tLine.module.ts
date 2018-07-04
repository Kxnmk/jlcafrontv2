import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TLineRoutingModule } from './tLine-routing.module';
import { TLineComponent } from './tLine.component';

import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [CommonModule, TLineRoutingModule, PageHeaderModule],
    declarations: [TLineComponent]
})
export class TLineModule {}
