import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudienciasComponent } from './audiencias.component';

const routes: Routes = [
    {
        path: '',
        component: AudienciasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AudienciasRoutingModule {}
