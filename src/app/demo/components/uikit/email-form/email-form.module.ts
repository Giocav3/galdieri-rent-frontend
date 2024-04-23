import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EmailFormComponent } from "./email-form.component";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { EmailFormRoutingModule } from "./email-form-routing.module";
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        EditorModule,
        EmailFormRoutingModule,
        InputGroupModule,
        InputGroupAddonModule,
        ReactiveFormsModule
    ],
    exports: [EmailFormComponent],
    declarations: [EmailFormComponent]
})
export class EmailFormModule { }
