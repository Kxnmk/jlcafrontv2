import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { PageHeaderModule } from './../../../shared';

import { UsuarioServiceService} from './../../../shared/services/usuario-service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, UsuariosRoutingModule, PageHeaderModule, Ng2SearchPipeModule, FormsModule, ReactiveFormsModule],
    declarations: [UsuariosComponent],
    providers: [UsuarioServiceService]
})
export class UsuariosModule {}
