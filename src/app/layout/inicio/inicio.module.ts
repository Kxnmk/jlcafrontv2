import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { CalendarModule } from 'angular-calendar';
import localeEs from '@angular/common/locales/es-MX';



registerLocaleData(localeEs);

@NgModule({
    imports: [CommonModule, InicioRoutingModule, CalendarModule.forRoot()],
    declarations: [InicioComponent]
})
export class InicioModule {}
