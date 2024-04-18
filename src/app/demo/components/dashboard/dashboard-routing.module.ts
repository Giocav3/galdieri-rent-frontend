import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Table } from 'primeng/table';
import { TablePracticesNgprimeComponent } from '../table-practices-ngprime/table-practices-ngprime.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: DashboardComponent
        },
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
