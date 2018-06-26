import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MActorRoutingModule } from './mActor-routing.module';
import { MActorComponent } from './mActor.component';

import { PageHeaderModule } from './../../../../shared';

@NgModule({
    imports: [CommonModule, MActorRoutingModule, PageHeaderModule],
    declarations: [MActorComponent]
})
export class MActorModule {}
