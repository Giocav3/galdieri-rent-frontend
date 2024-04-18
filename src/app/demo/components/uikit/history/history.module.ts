import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryRoutingModule } from './history-routing';
import { FieldsetModule } from 'primeng/fieldset';
import { HistoryComponent } from './history.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
    imports: [
        CommonModule,
        HistoryRoutingModule,
        FieldsetModule,
        PanelModule
    ],
    exports: [HistoryComponent],
    declarations: [HistoryComponent]
})
export class HistoryModule { }
