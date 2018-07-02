import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MAudComponent } from './mAud.component';

const routes: Routes = [
    {
        path: '',
        component: MAudComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MAudRoutingModule {}
