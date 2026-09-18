import type { Car } from '@/types/car';
import css from './CarDetailsInfo.module.css';

interface CarInfoProps {
    car: Car;
}

const formatMileage = (mileage: number): string =>
    mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const Icon = ({ name }: { name: string }) => (
    <svg className={css.icon} aria-hidden="true">
        <use href={`/sprite.svg#${name}`} />
    </svg>
);

const renderSection = (title: string, items: string[], iconName?: string) => (
    <>
        <h2 className={css.sectionTitle}>{title}</h2>
        <ul className={css.list}>
            {items.map((item, index) => (
                <li key={index} className={css.listItem}>
                    {iconName && <Icon name={iconName} />}
                    {item}
                </li>
            ))}
        </ul>
    </>
);

const renderSpecItem = (iconName: string, label: string, value: string | number) => (
    <li className={css.listItem}>
        <Icon name={iconName} />
        {`${label}: ${value}`}
    </li>
);

const CarInfo = ({ car }: CarInfoProps)=> {
    return (
        <div className={css.carDetailRight}>
            <div className={css.header}>
                <div className={css.titleRow}>
                    <h1 className={css.title}>
                        {car.brand} {car.model}, {car.year}
                    </h1>
                    <span className={css.stockNumber}>{`Article ${car.stockNumber}`}</span>
                    <p className={css.location}>
                        <Icon name="icon-location" />
                        {car.location.city}, {car.location.country}
                    </p>
                    <p className={css.price}>{`$${car.rentalPrice}`}</p>
                </div>
                <p className={css.description}>{car.description}</p>
            </div>

            <div className={css.details}>
                {renderSection('Rental Conditions', car.rentalConditions, 'icon-check-circle')}

                <hr className={css.divider} />
                <h2 className={css.sectionTitle}>Specifications</h2>
                <ul className={css.list}>
                    {renderSpecItem('icon-calendar', 'Year', car.year)}
                    {renderSpecItem('icon-car', 'Type', car.type)}
                    {renderSpecItem('icon-fuel-pump', 'Fuel Consumption', car.fuelConsumption)}
                    {renderSpecItem('icon-gear', 'Engine', car.engine)}
                    {renderSpecItem('icon-road-horizon', 'Mileage', `${formatMileage(car.mileage)} km`)}
                </ul>

                <hr className={css.divider} />
                {renderSection('Features', car.features, 'icon-check-circle')}
            </div>
        </div>
    );
}
export default CarInfo;