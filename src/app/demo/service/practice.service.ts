import { Injectable } from '@angular/core';
import { Practices } from '../api/practices';
import { Observable, of } from 'rxjs';
import { practicesData } from '../fakeData/practicesData';

@Injectable({
    providedIn: 'root'
})
export class PracticesService {

    constructor() { }

    getPractices(): Observable<Practices[]> {
        return of(practicesData);
    }
}
