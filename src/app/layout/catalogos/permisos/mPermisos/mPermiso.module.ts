import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MPermisoRoutingModule } from './mPermiso-routing.module';
import { MPermisoComponent } from './mPermiso.component';

import { PageHeaderModule } from './../../../../shared';

@NgModule({
    imports: [CommonModule, MPermisoRoutingModule, PageHeaderModule],
    declarations: [MPermisoComponent]
})
export class MPermisoModule {}
