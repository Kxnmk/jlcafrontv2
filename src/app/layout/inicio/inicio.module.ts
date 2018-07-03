import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { CalendarModule } from 'angular-calendar';

@NgModule({
    imports: [CommonModule, InicioRoutingModule, CalendarModule.forRoot()],
    declarations: [InicioComponent]
})
export class InicioModule {}
