import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { practicesData } from '../fakeData/practicesData';
import { Client } from '../api/clients';
import { clientsData } from '../fakeData/clientsData';

@Injectable({
    providedIn: 'root'
})
export class ClientsService {

    constructor() { }

    getPractices(): Observable<Client[]> {
        return of(clientsData);
    }
}
