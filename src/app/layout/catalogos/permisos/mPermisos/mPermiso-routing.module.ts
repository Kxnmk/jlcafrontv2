import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MPermisoComponent } from './mPermiso.component';

const routes: Routes = [
    {
        path: '',
        component: MPermisoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MPermisoRoutingModule {}
