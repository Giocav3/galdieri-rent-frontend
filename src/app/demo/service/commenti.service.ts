import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommentiService {
    getCommentiData() {

        return [{
            note: 'Chiamata persa',
            isMissedCall: true,
            callDate: '10/07/2021 12:34:00',
        },
        {
            note: 'Chiamata ricevuta',
            isMissedCall: false,
            callDate: '11/07/2021 19:22:00',
        },
        {
            note: 'Chiamata ricevuta',
            isMissedCall: false,
            callDate: '11/07/2023 09:22:00',
        }];
    }
}
