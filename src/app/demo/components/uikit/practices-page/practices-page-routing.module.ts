import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PracticesPageComponent } from './practices-page.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: PracticesPageComponent
        }
    ])],
    exports: [RouterModule]
})
export class PracticesPageRoutingModule { }
