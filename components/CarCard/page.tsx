import Button from "@/components/Button/Button";
import Image from "next/image";
import {Car} from "@/types/car";

interface CarCardProps {
    car: Car;
    priority: boolean;
}

const Card = ({car, priority}: CarCardProps) => {
    return (
        <div className="card">
            <div className="card-image">
                <Image src={car.img} alt={`Picture of ${car.brand} ${car.model} ${car.year}`} priority={priority}/>
            </div>
            <div className="card-content">
                <div className="car-title">
                    <p className="car-name">${car.brand} ${car.model} ${car.year}</p>
                    <p className="car-price">${car.rentalPrice} $</p>
                </div>
                <ul className="car-description">
                    <li className="item">{car.location.city}</li>
                    <li className="item">{car.location.country}</li>
                    <li className="item">{car.rentalCompany}</li>
                    <li className="item">{car.type}</li>
                    <li className="item">{car.mileage}</li>
                </ul>
            </div>
            <Button variant="secondary">Read more</Button>
        </div>
    )
}

export default Card;