import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActionsComponent } from "./actions.component";
import { ActionsRoutingModule } from "./actions-routing.module";
import { ButtonModule } from "primeng/button";
import { ScrollPanelModule } from "primeng/scrollpanel";


@NgModule({
    imports: [
        CommonModule,
        ActionsRoutingModule,
        ButtonModule,
        ScrollPanelModule
    ],
    exports: [ActionsComponent],
    declarations: [ActionsComponent]
})

export class ActionsModule { }