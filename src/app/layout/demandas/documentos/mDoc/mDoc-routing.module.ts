import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MDocComponent } from './mDoc.component';

const routes: Routes = [
    {
        path: '',
        component: MDocComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MDocRoutingModule {}
