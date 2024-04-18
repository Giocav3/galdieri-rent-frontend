import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePracticesNgprimeComponent } from './table-practices-ngprime.component';
import { TableModule } from 'primeng/table';
import { TablePracticesNgprimeComponentRoutingModule } from './table-practices-ngprime-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        TablePracticesNgprimeComponentRoutingModule,
        DragDropModule
    ],

})
export class TablePracticesNgprimeModule { }
