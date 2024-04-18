import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PracticesPageComponent } from './practices-page.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: PracticesPageComponent, children: [
                { path: 'history', loadChildren: () => import('../history/history.module').then(m => m.HistoryModule) },
                { path: 'tabview', loadChildren: () => import('../tab-view/tab-view.module').then(m => m.TabViewPracticesModule) },
                { path: 'table', loadChildren: () => import('../table-practices/table-practices.module').then(m => m.TablePracticesModule) }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class PracticesPageRoutingModule { }
