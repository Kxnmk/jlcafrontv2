import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusuarioRoutingModule } from './mUsuario-routing.module';
import { MusuarioComponent } from './mUsuario.component';
import { PageHeaderModule } from './../../../../shared';

@NgModule({
    imports: [CommonModule, MusuarioRoutingModule, PageHeaderModule],
    declarations: [MusuarioComponent]
})
export class MusuarioModule {}
