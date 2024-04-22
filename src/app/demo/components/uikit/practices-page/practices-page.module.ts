import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { PracticesPageComponent } from './practices-page.component';
import { PracticesPageRoutingModule } from './practices-page-routing.module';
import { HistoryModule } from '../history/history.module';
import { TabViewPracticesModule } from '../tab-view/tab-view.module';
import { FormDataPracticeModule } from '../form-data-practice/form-data-practice.module';
import { ActionsModule } from '../actions/actions.module';
import { CommentiModule } from '../commenti/commenti.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ToolbarModule,
        PracticesPageRoutingModule,
        ButtonModule,
        RippleModule,
        SplitButtonModule,
        AccordionModule,
        TabViewModule,
        FieldsetModule,
        MenuModule,
        InputTextModule,
        DividerModule,
        SplitterModule,
        PanelModule,
        HistoryModule,
        TabViewPracticesModule,
        FormDataPracticeModule,
        ActionsModule,
        CommentiModule,
    ],
    exports: [PracticesPageComponent],
    declarations: [PracticesPageComponent]
})
export class PracticesPageModule { }
