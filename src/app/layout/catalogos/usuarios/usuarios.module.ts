import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { PageHeaderModule } from './../../../shared';
import { UsuariosTableComponent } from './usuarios-table/usuarios-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';





@NgModule({
    imports: [CommonModule, UsuariosRoutingModule, PageHeaderModule, MatTableModule, MatPaginatorModule, MatSortModule],
    declarations: [UsuariosComponent, UsuariosTableComponent]
})
export class UsuariosModule {}
