import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActoresComponent } from './actores.component';

const routes: Routes = [
    {
        path: '',
        component: ActoresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActoresRoutingModule {}
