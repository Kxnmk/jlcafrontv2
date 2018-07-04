import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TLineComponent } from './tLine.component';

const routes: Routes = [
    {
        path: '',
        component: TLineComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TLineRoutingModule {}
