import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MComComponent } from './mCom.component';

const routes: Routes = [
    {
        path: '',
        component: MComComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MComRoutingModule {}
