import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentiComponent } from './commenti.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CommentiComponent }
    ])],
    exports: [RouterModule]
})
export class CommentiRoutingModule { }
