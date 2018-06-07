import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultasEComponent } from './consultaE.component';

const routes: Routes = [
    {
        path: '',
        component: ConsultasEComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultasERoutingModule {}
