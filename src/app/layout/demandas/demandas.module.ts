import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemandasRoutingModule } from './demandas-routing.module';
import { DemandasComponent } from './demandas.component';
import { PageHeaderModule } from './../../shared';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [CommonModule, DemandasRoutingModule, PageHeaderModule, Ng2SearchPipeModule, FormsModule, ReactiveFormsModule],
    declarations: [DemandasComponent]
})
export class DemandasModule {}
