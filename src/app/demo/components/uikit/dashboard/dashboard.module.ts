import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { TablePracticesNgprimeModule } from "../../table-practices-ngprime/table-practices-ngprime.module";
import { MenuModule } from "primeng/menu";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { ChartModule } from "primeng/chart";

@NgModule({
    imports: [CommonModule, DashboardRoutingModule, TablePracticesNgprimeModule, MenuModule, ButtonModule, DropdownModule, ChartModule],
    exports: [DashboardComponent],
    declarations: [DashboardComponent],
})
export class DashboardModule { }
