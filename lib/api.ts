import axios, {type AxiosResponse} from 'axios';
import {Car} from "@/types/car";

export interface FetchCarsParams {
    page?: number,
    perPage?: number,
    brand?: string,
    price?: number,
    minMileage?: number,
    maxMileage?: number,
}

export interface FetchCarsResponse {
    cars: Car[];
    totalCars: number;
    page: number;
    totalPages: number;
}

export interface CarFiltersResponse {
    brands: string[];
    price: {
        min: number;
        max: number;
    };
}

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const carApi = axios.create({
        baseURL: API_BASE_URL,
    }
);

export const fetchCars = async (params: FetchCarsParams): Promise<FetchCarsResponse> => {
    const { page, perPage, brand, price, minMileage, maxMileage } = params;

    const requestParams = {
        page,
        perPage,
        ...(brand && { brand }),
        ...(price !== undefined && { price }),
        ...(minMileage !== undefined && { minMileage }),
        ...(maxMileage !== undefined && { maxMileage }),

    };
    const response: AxiosResponse<FetchCarsResponse> = await carApi.get("/cars", {params: requestParams});
    return response.data;
}

export const fetchCarFilters = async(): Promise<CarFiltersResponse> => {
    const response = await carApi.get("/cars/filters");
    return response.data;
}