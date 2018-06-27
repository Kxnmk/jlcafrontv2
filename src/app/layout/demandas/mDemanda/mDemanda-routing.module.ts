import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MDemandaComponent } from './mDemanda.component';

const routes: Routes = [
    {
        path: '',
        component: MDemandaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MDemandaRoutingModule {}
