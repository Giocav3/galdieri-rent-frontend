import { Component } from '@angular/core';
import { DynamicTabView } from 'src/app/demo/api/tab';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrl: './tab-view.component.scss'
})
export class TabViewComponent {
  dynamicTabView: DynamicTabView = {
    tabs: [
      {
        header: 'PROSPECT',
        content: 'Contenuto del tab Prospect...',
      },
      {
        header: 'PREVENTIVO',
        content: 'Contenuto del tab Preventivo...',
      },
      {
        header: 'AFFIDAMENTO',
        content: 'Contenuto del tab Affidamento...',
      },
      {
        header: 'RENT',
        content: 'Contenuto del tab Rent...',
      },
      {
        header: 'CONTRATTO',
        content: 'Contenuto del tab Contratto...',
      },
      {
        header: 'CONSEGNA',
        content: 'Contenuto del tab Consegna...',
        disabled: true,
      },
    ],
  };

}
