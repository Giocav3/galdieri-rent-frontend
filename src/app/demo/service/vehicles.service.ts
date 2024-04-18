import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { vehiclesData } from '../fakeData/vehiclesData';
import { Vehicle } from '../api/vehicle';
@Injectable({
    providedIn: 'root'
})
export class VehiclesService {

    constructor() { }

    getVehicles(): Observable<Vehicle[]> {
        return of(vehiclesData);
    }
}
