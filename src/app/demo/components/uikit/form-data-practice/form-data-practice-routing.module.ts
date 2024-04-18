import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormDataPracticeComponent } from './form-data-practice.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: FormDataPracticeComponent }
    ])],
    exports: [RouterModule]
})
export class FormDataPracticeRoutingModule { }
