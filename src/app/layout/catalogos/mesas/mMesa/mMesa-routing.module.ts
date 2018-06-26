import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MMesaComponent } from './mMesa.component';

const routes: Routes = [
    {
        path: '',
        component: MMesaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MMesaRoutingModule {}
