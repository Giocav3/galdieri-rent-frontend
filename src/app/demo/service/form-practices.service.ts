import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormPractices } from '../api/form-practices';

@Injectable({
    providedIn: 'root'
})
export class FormPracticesService {

    constructor() { }

    // Metodo per ottenere i dati per il form
    getFormData(): Observable<FormPractices> {
        // I dati possono essere recuperati da una richiesta HTTP, da un database o da qualsiasi altra fonte
        // In questo esempio, forniamo dati mock
        const formData: FormPractices = {
            code: 'ABC123',
            ritardo: 'Nessun ritardo',
            cliente: 'Cliente ABC',
            stato: 'In corso',
            consulente: 'Mario Rossi',
            area_manager: 'Marco Bianchi'
        };
        return of(formData); // Simulazione di un'operazione asincrona che restituisce i dati
    }
}