import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban.component';
import { FilterByStatusPipe } from './pipe.';
import { KanbanRoutingModule } from './kanban-routing.module';


@NgModule({
    imports: [
        CommonModule,
        KanbanRoutingModule
    ],
    declarations: []
})
export class KanbanModule { }
