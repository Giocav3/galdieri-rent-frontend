import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewComponent } from './tab-view.component';
import { TabViewRoutingModule } from './tab-view-rounting.module';
import { TabViewModule } from 'primeng/tabview';
import { CommentiModule } from '../commenti/commenti.module';
import { TabViewExampleComponent } from './tab-view-example.component';
import { EmailFormModule } from '../email-form/email-form.module';

@NgModule({
    imports: [
        CommonModule,
        TabViewRoutingModule,
        TabViewModule,
        CommentiModule,
        EmailFormModule
    ],
    exports: [TabViewComponent, TabViewExampleComponent],
    declarations: [TabViewComponent, TabViewExampleComponent]
})
export class TabViewPracticesModule { }
