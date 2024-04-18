import { Client } from "../api/clients";
export const clientsData: Client[] = [
    { id: 1, name: 'John', surname: 'Doe', from_lead: 'Google Ads', client_type: 'Corporate', id_employee: 'EMP001' },
    { id: 2, name: 'Jane', surname: 'Smith', from_lead: 'Referral', client_type: 'Individual', id_employee: 'EMP002' },
    { id: 3, name: 'Alice', surname: 'Johnson', from_lead: 'Website', client_type: 'Corporate', id_employee: 'EMP003' },
    { id: 4, name: 'Bob', surname: 'Williams', from_lead: 'Social Media', client_type: 'Individual', id_employee: 'EMP002' },
    // Aggiungi altri clienti fittizi se necessario
];