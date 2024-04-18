import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablePracticesNgprimeComponent } from './table-practices-ngprime.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TablePracticesNgprimeComponent }
    ])],
    exports: [RouterModule]
})
export class TablePracticesNgprimeComponentRoutingModule { }
