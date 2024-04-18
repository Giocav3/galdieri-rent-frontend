import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablePracticesComponent } from './table-practices.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TablePracticesComponent }
    ])],
    exports: [RouterModule]
})
export class TablePracticesRoutingModule { }
