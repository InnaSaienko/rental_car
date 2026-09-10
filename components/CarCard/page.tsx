import Button from "@/components/Button/Button";
import Image from "next/image";
import {Car} from "@/types/car";
import css from "./CardCard.module.css";

interface CarCardProps {
    car: Car;
    priority: boolean;
}

const Card = ({car, priority}: CarCardProps) => {
    return (
        <div className={css.card}>
            <div className={css.cardContent}>
                <Image className={css.image} src={car.img} alt={`Picture of ${car.brand} ${car.model} ${car.year}`}
                       width={244} height={268} priority={priority}/>
                <div className={css.carDescription}>
                    <div className={css.carTitle}>
                        <p className={css.carName}>${car.brand} <span className={css.model}>{car.model}</span>, ${car.year}</p>
                        <p className={css.carPrice}>`${car.rentalPrice}`</p>
                    </div>
                    <ul className={css.basicInfo}>
                        <li className={css.item}>{car.location.city}</li>
                        <li className={css.item}>{car.location.country}</li>
                        <li className={css.item}>{car.rentalCompany}</li>
                        <li className={css.item}>{car.type}</li>
                        <li className={css.item}>{car.mileage}</li>
                    </ul>
                </div>
            </div>
            <Button variant="secondary">Read more</Button>
        </div>
    )
}

export default Card;