import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { PageHeaderModule } from './../../../shared';

import { UsuarioServiceService} from './../../../shared/services/usuario-service.service';


@NgModule({
    imports: [CommonModule, UsuariosRoutingModule, PageHeaderModule],
    declarations: [UsuariosComponent],
    providers: [UsuarioServiceService]
})
export class UsuariosModule {}
