import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PDocComponent } from './pDoc.component';

const routes: Routes = [
    {
        path: '',
        component: PDocComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PDocRoutingModule {}
