import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandasComponent } from './demandas.component';

const routes: Routes = [
    {
        path: '',
        component: DemandasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemandasRoutingModule {}
