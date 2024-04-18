import { Prospect } from "../api/prospect";

export // Array di Prospect generati direttamente
    const prospects: Prospect[] = [
        {
            id: 1,
            name: 'John',
            surname: 'Doe',
            cf: 'ABC123',
            phone_number: '1234567890',
            email: 'john@example.com',
            role: 'Customer'
        },
        {
            id: 2,
            name: 'Jane',
            surname: 'Smith',
            cf: 'DEF456',
            phone_number: '0987654321',
            email: 'jane@example.com',
            role: 'Consultant'
        },
        {
            id: 3,
            name: 'Alice',
            surname: 'Johnson',
            cf: 'GHI789',
            phone_number: '5678901234',
            email: 'alice@example.com',
            role: 'Lead'
        }

    ];