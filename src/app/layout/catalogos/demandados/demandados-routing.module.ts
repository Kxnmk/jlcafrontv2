import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandadosComponent } from './demandados.component';

const routes: Routes = [
    {
        path: '',
        component: DemandadosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemandadosRoutingModule {}
