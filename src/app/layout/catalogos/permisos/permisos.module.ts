import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRoutingModule } from './permisos-routing.module';
import { PermisosComponent } from './permisos.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [CommonModule, PermisosRoutingModule, PageHeaderModule],
    declarations: [PermisosComponent]
})
export class PermisosModule {}
