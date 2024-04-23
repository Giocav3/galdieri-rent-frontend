import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePracticesNgprimeComponent } from './table-practices-ngprime.component';
import { TableModule } from 'primeng/table';
import { TablePracticesNgprimeComponentRoutingModule } from './table-practices-ngprime-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        TablePracticesNgprimeComponentRoutingModule,
        DragDropModule,
        ButtonModule
    ],
    exports: [TablePracticesNgprimeComponent],
    declarations: [TablePracticesNgprimeComponent],

})
export class TablePracticesNgprimeModule { }
