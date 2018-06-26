import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MActorComponent } from './mActor.component';

const routes: Routes = [
    {
        path: '',
        component: MActorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MActorRoutingModule {}
