import Button from "@/components/Button/Button";
import Image from "next/image";
import {Car} from "@/types/car";
import css from "./CarCard.module.css";
import {memo} from "react";

interface CarCardProps {
    car: Car;
    priority: boolean;
}

const Card = ({car, priority}: CarCardProps) => {
    return (
        <div className={css.card}>
            <div className={css.cardContent}>
                <Image className={css.cardImage} src={car.img} alt={`Picture of ${car.brand} ${car.model} ${car.year}`}
                       width={244} height={268} priority={priority} loading={"eager"}/>
                <div className={css.carDescription}>
                    <div className={css.carTitle}>
                        <p className={css.carName}>{car.brand} <span className={css.model}>{car.model}</span>, {car.year}</p>
                        <p className={css.carPrice}>${car.rentalPrice}</p>
                    </div>
                    <ul className={css.basicInfo}>
                        <li className={css.infoGroup}>
                            <span className={css.infoItem}>{car.location.city}</span>
                            <svg className={css.separator}><use href="/sprite.svg#icon-vector" /></svg>
                            <span className={css.infoItem}>{car.location.country}</span>
                            <svg className={css.separator}><use href="/sprite.svg#icon-vector" /></svg>
                            <span className={css.infoItem}>{car.rentalCompany}</span>
                        </li>
                        <li className={css.infoGroup}>
                            <span className={css.infoItem}>{car.type}</span>
                            <svg className={css.separator}><use href="/sprite.svg#icon-vector" /></svg>
                            <span className={css.infoItem}>{car.mileage}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <Button variant="secondary">Read more</Button>
        </div>
    )
}

export default memo(Card);