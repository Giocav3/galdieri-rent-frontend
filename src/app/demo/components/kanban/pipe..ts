
import { Pipe, PipeTransform } from '@angular/core';
import { Practices } from './../../api/practices'; // Assicurati di importare il percorso corretto per Practices

@Pipe({
    name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {
    transform(items: Practices[] | null | undefined, status: string): Practices[] | null | undefined {
        if (!items || !status) {
            return items;
        }
        return items.filter(item => item.id_status === status);
    }
}
