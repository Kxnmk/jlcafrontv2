import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MDemandadoComponent } from './mDemandado.component';

const routes: Routes = [
    {
        path: '',
        component: MDemandadoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MDemandadoRoutingModule {}
