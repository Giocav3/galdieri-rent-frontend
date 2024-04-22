import { Component, OnInit } from '@angular/core';
import { Commenti } from 'src/app/demo/api/commenti';
import { CommentiService } from 'src/app/demo/service/commenti.service';

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrl: './commenti.component.scss'
})
export class CommentiComponent implements OnInit {
  commenti: Commenti[];
  items: { label?: string; icon?: string; separator?: boolean }[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Search',
        icon: 'pi pi-search'
      },
      {
        separator: true
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];

    this.commenti = this.commentiService.getCommentiData();
  }



  constructor(private commentiService: CommentiService) { }

}
