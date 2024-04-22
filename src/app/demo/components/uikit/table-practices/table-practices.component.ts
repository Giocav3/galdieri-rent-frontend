


import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Practices } from 'src/app/demo/api/practices';
import { PracticesService } from 'src/app/demo/service/practice.service';
import { CdkDragDrop, CdkDragEnd, CdkDragStart, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ColumnDefinition } from 'src/app/demo/api/ColumnDefinition';
import { ColumnNGprime } from 'src/app/demo/api/columnNGprime';
import { Table, TableModule } from 'primeng/table';

@Component({
    selector: 'app-table-practices',
    templateUrl: './table-practices.component.html',
    styleUrls: ['./table-practices.component.scss'],
})
export class TablePracticesComponent {
    dataNGprime: Practices[] = []
    dataNGprimeVehicles: (string | undefined)[] = []
    displayedColumns: ColumnDefinition[] = [{ def: 'id', title: 'ID', show: true }, { def: 'id_proscpect', title: 'ID Prospect', show: true }, { def: 'id_vehicle', title: 'ID Vehicle', show: true }, { def: 'id_status', title: 'ID Status', show: true }, { def: 'id_employee', title: 'ID Employee', show: true }, { def: 'id_details', title: 'ID Details', show: true }, { def: 'actions', title: 'Actions', show: true }];
    rowDef: string[] = this.displayedColumns.map(col => col.def);
    statuses: (string | undefined)[] = []
    employees: (string | undefined)[] = []
    uniqueStatuses: string[] = ['OPEN', 'CLOSED', 'IN_PROGRESS', 'PENDING', 'REJECTED', 'APPROVED', 'CANCELED', 'SUSPENDED', 'COMPLETED', 'INCOMPLETE', 'IN_REVIEW', 'IN_REVISION', 'IN_ANALYSIS', 'IN_DEVELOPMENT', 'IN_TEST', 'IN_DEPLOYMENT', 'IN_MAINTENANCE', 'IN_ARCHIVING', 'IN_DISPOSAL', 'IN_RECYCLING', 'IN_RECOVERY', 'IN_REPAIR', 'IN_REPLACEMENT', 'IN_RENEWAL',]
    columns: ColumnNGprime[] = [{ field: 'id', header: 'ID' }, { field: 'id_proscpect', header: 'ID Prospect' }, { field: 'id_vehicle', header: 'ID Vehicle' }, { field: 'id_status', header: 'ID Status' }, { field: 'id_employee', header: 'ID Employee' }, { field: 'id_details', header: 'ID Details' }, { field: 'actions', header: 'Actions' }]
    @ViewChild('dt')
    dt!: Table;
    kanbanSections: { status: string, practices: Practices[] }[] = [];
    isTableVisible: boolean = true;
    kanbanData: Record<string, Practices[]> = {};


    filterGlobal(event: any) {
        console.log(this.dt)
        const value = event.target.value.toLowerCase();
        this.dt.filterGlobal(value, 'contains');
    }


    constructor(private practicesService: PracticesService, private changeDetectorRef: ChangeDetectorRef,) {
    }

    ngOnInit() {
        // Carica i dati iniziali della tabella
        this.loadData();
        console.log(this.displayedColumns.map(col => col.def))

        this.createKanban(this.dataNGprime);

    }

    ngAfterViewInit() {

    }

    switchToKanban() {
        this.isTableVisible = !this.isTableVisible;
    }

    loadData() {
        this.practicesService.getPractices().subscribe((data) => {

            this.dataNGprime = data
            console.log(data)
            console.log(this.dataNGprimeVehicles)
        });


    }

    toggleColumnCheckbox(columnName: string) {
        console.log(columnName)
        const column = this.displayedColumns.find(col => col.def === columnName);
        if (column) {
            column.show = !column.show; // Inverti lo stato della colonna
            this.toggleColumn(columnName); // Aggiorna la visualizzazione della colonna
        }
    }

    toggleColumn(columnName: string) {
        const column = this.displayedColumns.find(col => col.def === columnName);

        if (column) {
            column.show = !column.show; // Inverti lo stato della colonna
            this.rowDef = this.displayedColumns.filter(col => col.show).map(col => col.def);
            console.log(column)
            this.updateTableDisplay(); // Aggiorna la visualizzazione della tabella
        }
    }

    updateTableDisplay() {
        // Forza il refresh della visualizzazione della tabella
        this.changeDetectorRef.detectChanges();
    }
    resetColumns() {
    }


    reorderColumns(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.rowDef, event.previousIndex, event.currentIndex);
    }

    getSeverity(status: string): string | undefined {
        switch (status) {
            case 'OPEN':
                return 'open';

            case 'CLOSED':
                return 'success';

            case 'IN_PROGRESS':
                return 'warning';

            default:
                return undefined;
        }
    }

    clear(table: Table) {
        table.clear();
    }

    toggleDelete(row: Practices) {
        // this.openDeleteModal(row);
    }


    logInputValue(event: any) {
        console.log(event.target.value);
    }

    applyIdFilter(frase: string) {
        console.log(frase)
    }

    acceptPractices(row: Practices) {
        console.log(row)
    }

    rejectPractices(row: Practices) {
        console.log(row)
    }

    editPractices(row: Practices) {
        console.log(row)
    }

    // Definiamo una funzione per trasformare i dati della tabella in un kanban
    createKanban(data: Practices[]): Record<string, Practices[]> {
        // Inizializziamo le colonne per gli stati
        const kanbanColumns: Record<string, Practices[]> = {
            OPEN: [],
            CLOSED: [],
            IN_PROGRESS: []
        };

        // Iteriamo attraverso i dati della tabella e inseriamoli nelle colonne corrispondenti
        data.forEach(item => {
            switch (item.id_status) {
                case 'OPEN':
                    kanbanColumns['OPEN'].push(item);
                    break;
                case 'CLOSED':
                    kanbanColumns['CLOSED'].push(item);
                    break;
                case 'IN_PROGRESS':
                    kanbanColumns['IN_PROGRESS'].push(item);
                    break;
                default:
                    break;
            }
        });
        console.log(kanbanColumns)
        this.kanbanData = kanbanColumns
        return kanbanColumns;
    }

    onDrop(event: CdkDragDrop<Practices[]>, status: string) {
        console.log(event, status)
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            const item: Practices = event.previousContainer.data[event.previousIndex];
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
            // Aggiorna lo stato dell'elemento trascinato
            item.id_status = status;
            // Esegui l'aggiornamento del backend per salvare lo stato aggiornato
            // Esempio: this.practicesService.updatePractice(item);
        }
    }

    onDragStart(event: CdkDragStart, item: Practices) {
        // Logga l'inizio del trascinamento e l'elemento trascinato
        console.log('Drag started', item);
    }

    onDragEnd(event: CdkDragEnd) {
        // Logga la fine del trascinamento
        console.log('Drag ended');
    }

}
