export interface Location {
    country: string;
    city: string;
    address: string;
}

export interface Car {
    id: string;
    year: number;
    brand: string;
    model: string;
    type: string;
    img: string;
    description: string;
    fuelConsumption:  number;
    engine: string;
    features: string[];
    rentalPrice: string;
    rentalCompany: string;
    location: Location;
    rentalConditions: string[];
    mileage: number;
    stockNumber: number;
    createdAt: string;
    updatedAt: string;
}

export interface CarFilters {
    brand?: string;
    price?: number;
    minMileage?: number;
    maxMileage?: number;
}