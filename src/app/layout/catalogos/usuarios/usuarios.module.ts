import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [CommonModule, UsuariosRoutingModule, PageHeaderModule],
    declarations: [UsuariosComponent]
})
export class UsuariosModule {}
