import { Component, Input } from '@angular/core';
import { DynamicTabView } from 'src/app/demo/api/tab';

@Component({
    selector: 'app-tab-view-example',
    templateUrl: './tab-view.component.html',
    styleUrl: './tab-view.component.scss'
})
export class TabViewExampleComponent {
    tabs: DynamicTabView = {
        tabs: [
            { header: 'ETICHETTE', path: 'etichette', disabled: false },
            { header: 'COMMENTI', path: 'commenti', disabled: false },
            { header: 'EMAIL', path: 'email', disabled: false },
        ]
    }
}
