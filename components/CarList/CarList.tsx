"use client"

import CarCard from "@/components/CarCard/page"
import {Car} from "@/types/car"
import css from "./CarList.module.css"

interface CarListProps {
    cars: Car[];
}

const CarList = ({cars}: CarListProps) => {
    return (
        <div className={`container ${css.carList}`}>
            {cars.map((car, index) => (
                <CarCard 
                    key={car.id} 
                    car={car} 
                    priority={index < 4}
                />
            ))}
        </div>
    )
}

export default CarList;
