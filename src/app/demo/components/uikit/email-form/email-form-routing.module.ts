import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailFormComponent } from './email-form.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EmailFormComponent }
    ])],
    exports: [RouterModule]
})
export class EmailFormRoutingModule { }
