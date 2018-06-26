import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MMesaRoutingModule } from './mMesa-routing.module';
import { MMesaComponent } from './mMesa.component';

import { PageHeaderModule } from './../../../../shared';

@NgModule({
    imports: [CommonModule, MMesaRoutingModule, PageHeaderModule],
    declarations: [MMesaComponent]
})
export class MMesaModule {}
