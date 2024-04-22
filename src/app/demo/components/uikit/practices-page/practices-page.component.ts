import { Component, Input } from '@angular/core';
import { DynamicTabView } from 'src/app/demo/api/tab';
import { CommentiComponent } from '../commenti/commenti.component';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'app-practices-page',
  templateUrl: './practices-page.component.html',
  styleUrl: './practices-page.component.scss'
})
export class PracticesPageComponent {

  practiceTabs: DynamicTabView = {
    tabs: [
      { header: 'PROSPECT', path: 'prospect', disabled: false },
      { header: 'PREVENTIVO', path: 'preventivo', disabled: false },
      { header: 'AFFIDAMENTO', path: 'affidamento', disabled: false },
      { header: 'RENT', path: 'rent', disabled: false },
      { header: 'CONTRATTO', path: 'contratto', disabled: false },
      { header: 'CONSEGNA', path: 'consegna', disabled: true },
    ]
  }

  notificationTabs: DynamicTabView = {
    tabs: [
      { header: 'ETICHETTE', path: 'etichette', disabled: false },
      { header: 'COMMENTI', path: 'commenti', disabled: false },
      { header: 'EMAIL', path: 'email', disabled: false },
    ]
  }

}
