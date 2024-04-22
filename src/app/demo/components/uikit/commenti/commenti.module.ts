import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommentiRoutingModule } from "./commenti-routing.module";
import { CommentiComponent } from "./commenti.component";
import { PanelModule } from "primeng/panel";
import { FieldsetModule } from "primeng/fieldset";

@NgModule({
    imports: [
        CommentiRoutingModule,
        PanelModule,
        CommonModule,
        FieldsetModule
    ],
    exports: [CommentiComponent],
    declarations: [CommentiComponent]
})
export class CommentiModule { }