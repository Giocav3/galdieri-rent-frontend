import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewComponent } from './tab-view.component';
import { TabViewRoutingModule } from './tab-view-rounting.module';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
    imports: [
        CommonModule,
        TabViewRoutingModule,
        TabViewModule,
    ],
    exports: [TabViewComponent],
    declarations: [TabViewComponent]
})
export class TabViewPracticesModule { }
