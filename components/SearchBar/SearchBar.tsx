"use client"

import {useState, type ChangeEvent, type SubmitEvent} from 'react';
import {CarFiltersResponse} from "@/lib/api";
import Button from "@/components/Button/Button";
import css from "./SearchBar.module.css";
import style from "../CustomSelect/CustomDropdown.module.css";
import {CarFilters} from "@/types/car";
import CustomDropdown from "@/components/CustomSelect/CustomDropdown";


interface SearchBarProps {
    onFilter: (filters: CarFilters) => void;
    filters: CarFiltersResponse | null;
}

const DEFAULT_FILTERS: CarFilters = {};


const SearchBar = ({onFilter, filters}: SearchBarProps) => {
    const [brand, setBrand] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [mileageFrom, setMileageFrom] = useState<string>('');
    const [mileageTo, setMileageTo] = useState<string>('');

    const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
    const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);


    const brands = filters?.brands || [];
    const minPrice = filters?.price?.min || 0;
    const maxPrice = filters?.price?.max || 0;

    const priceOptions = Array.from(
        {length: Math.ceil((maxPrice - minPrice) / 10) + 1},
        (_, i) => minPrice + i * 10
    );

    const handleMileageChange = (setter: (value: string) => void) => (event: ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
    };

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        onFilter({
            brand: brand || "",
            price: price ? Number(price) : undefined,
            minMileage: mileageFrom ? Number(mileageFrom) : undefined,
            maxMileage: mileageTo ? Number(mileageTo) : undefined,
        });
        console.log("handleSubmit: ", brand, price, mileageFrom, mileageTo);
    };

    const handleClear = () => {
        setBrand("");
        setPrice("");
        setMileageFrom("");
        setMileageTo("");
        onFilter(DEFAULT_FILTERS);
    };

    return (
        <form className={css.searchForm} onSubmit={handleSubmit}>
            <CustomDropdown
                label="Car brand"
                value={brand}
                options={brands}
                placeholder="Choose a brand"
                onSelect={setBrand}
                isOpen={isBrandDropdownOpen}
                onToggle={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)}
                closeOtherDropdowns={() => setIsPriceDropdownOpen(false)}
            />

            <CustomDropdown
                label="Price/1 hour"
                value={price}
                options={priceOptions}
                placeholder="Choose a price"
                onSelect={setPrice}
                isOpen={isPriceDropdownOpen}
                onToggle={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
                closeOtherDropdowns={() => setIsBrandDropdownOpen(false)}
            />

            <div className={style.filterGroup}>
                <label className={style.label}>Car Mileage/km</label>
                <div className={css.mileageRange}>
                    <input
                        name="minMileage"
                        className={style.dropDownInput}
                        value={mileageFrom}
                        aria-label="Mileage from, km"
                        type="number"
                        onChange={handleMileageChange(setMileageFrom)}
                        placeholder="From"
                    />
                    <span className={css.mileageDivider} aria-hidden="true" />
                    <input
                        name="maxMileage"
                        className={style.dropDownInput}
                        value={mileageTo}
                        aria-label="Mileage to, km"
                        type="number"
                        onChange={handleMileageChange(setMileageTo)}
                        placeholder="To"
                    />

                </div>
            </div>
            <div className={css.searchButtonContainer}>
                <Button variant="secondary" type="submit" className={css.searchButton}>Search</Button>
                <button type="button" className={css.clearButton} onClick={handleClear}>
                    Clear filters
                </button>
            </div>

        </form>
    );
};

export default SearchBar;