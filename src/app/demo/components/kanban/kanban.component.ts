import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Practices } from '../../api/practices'; // Assicurati di importare il percorso corretto per Practices
import { PracticesService } from '../../service/practice.service';

@Component({
    selector: 'app-kanban',
    templateUrl: './kanban.component.html',
    styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent {
    @ViewChild('dt')
    dt!: Table;

    dataNGprime: Practices[] = []; // Assicurati di importare il percorso corretto per Practices

    constructor(private changeDetectorRef: ChangeDetectorRef, private practicesService: PracticesService) { }

    ngOnInit() {
        // Carica i dati iniziali della tabella
        this.loadData();
    }

    loadData() {
        this.practicesService.getPractices().subscribe((data) => {

            this.dataNGprime = data
            console.log(data)
        });

        /* this.vehicleService.getVehicles().subscribe((data) => {
          this.dataNGprimeVehicles = data
          console.log(data)
        }) */
    }
    drop(event: CdkDragDrop<Practices[]>, status: string) {
        const item = event.previousContainer.data[event.previousIndex];
        // Aggiorna lo stato dell'elemento prima di spostarlo
        item.id_status = status;
        // Aggiorna la visualizzazione della tabella
        this.changeDetectorRef.detectChanges();
    }

    resetTable() {
        // Resetta la tabella ai dati iniziali
        this.loadData();
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
}
