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

export interface FetchCarResponse {
    cars: Car[];
    totalCars: number;
    page: number;
    totalPages: number;
}

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const carApi = axios.create({
        baseURL: API_BASE_URL,
    }
);



export const fetchCars = async (params: FetchCarsParams): Promise<FetchCarResponse> => {
    const requestParams = {
        page: params.page,
        perPage: params.perPage,
    };
    const response: AxiosResponse<FetchCarResponse> = await carApi.get("/cars", {params: requestParams});
    return response.data;
}