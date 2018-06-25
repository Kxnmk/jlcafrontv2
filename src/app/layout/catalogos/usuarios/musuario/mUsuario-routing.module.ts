import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusuarioComponent } from './mUsuario.component';

const routes: Routes = [
    {
        path: '',
        component: MusuarioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MusuarioRoutingModule {}
