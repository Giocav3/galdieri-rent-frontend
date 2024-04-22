import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EmailFormComponent } from "./email-form.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { EmailFormRoutingModule } from "./email-form-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        EditorModule,
        EmailFormRoutingModule,
    ],
    exports: [EmailFormComponent],
    declarations: [EmailFormComponent]
})
export class EmailFormModule { }
