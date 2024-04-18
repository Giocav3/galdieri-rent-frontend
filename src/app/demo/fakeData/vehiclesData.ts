import { Vehicle } from "../api/vehicle";

export const vehiclesData: Vehicle[] = [
    { id: 1, brand: "Toyota", model: "Corolla", power_supply: "Petrol", setup: "Sedan", is_ready: true, landlord_house: "John's Garage" },
    { id: 2, brand: "Honda", model: "Civic", power_supply: "Petrol", setup: "Hatchback", is_ready: false, landlord_house: "Smith's Garage" },
    { id: 3, brand: "Ford", model: "Fusion", power_supply: "Petrol", setup: "SUV", is_ready: true, landlord_house: "Johnson's Garage" },
    { id: 4, brand: "Tesla", model: "Model S", power_supply: "Electric", setup: "Sedan", is_ready: true, landlord_house: "Elon's Garage" },
    { id: 5, brand: "BMW", model: "3 Series", power_supply: "Petrol", setup: "Coupe", is_ready: false, landlord_house: "Anderson's Garage" }
];
