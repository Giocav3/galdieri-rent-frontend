import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabViewComponent } from './tab-view.component';
import { CommentiComponent } from '../commenti/commenti.component';
import { TabViewExampleComponent } from './tab-view-example.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: TabViewComponent
        },
        { path: 'example', component: TabViewExampleComponent },
    ])],
    exports: [RouterModule]
})
export class TabViewRoutingModule { }
