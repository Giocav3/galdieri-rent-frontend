import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Practices } from './practices';


export type SortColumnPractices = keyof Practices | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotatePractices: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };


export interface SortEventPractices {
    column: SortColumnPractices;
    direction: SortDirection;
}



@Directive({
    selector: 'th[sortablePractices]',
    standalone: true,
    host: {
        '[class.asc]': 'direction === "asc"',
        '[class.desc]': 'direction === "desc"',
        '(click)': 'rotatePractices()',
    },
})
export class NgbdSortableHeader {
    @Input() sortablePractices: SortColumnPractices = '';
    @Input() direction: SortDirection = '';
    @Output() sortPractices = new EventEmitter<SortEventPractices>();

    rotatePractices() {
        this.direction = rotatePractices[this.direction];
        this.sortPractices.emit({ column: this.sortablePractices, direction: this.direction });
    }
}
