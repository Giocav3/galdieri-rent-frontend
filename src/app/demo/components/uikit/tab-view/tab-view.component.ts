import { Component, Input } from '@angular/core';
import { DynamicTabView } from 'src/app/demo/api/tab';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrl: './tab-view.component.scss'
})
export class TabViewComponent {
  @Input() tabs: DynamicTabView
}
