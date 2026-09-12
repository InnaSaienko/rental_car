import css from "./CustomDropdown.module.css"

interface CustomDropdownProps {
    label: string;
    value: string;
    options: (string | number)[];
    placeholder: string;
    onSelect: (value: string) => void;
    isOpen: boolean;
    onToggle: () => void;
    closeOtherDropdowns: () => void;
}

const CustomDropdown = ({
                            label,
                            value,
                            options,
                            placeholder,
                            onSelect,
                            isOpen,
                            onToggle,
                            closeOtherDropdowns
                        }: CustomDropdownProps) => (
    <div className={css.filterGroup}>
        <label className={css.field}>
            <span className={css.label}>{label}</span>
            <span className={css.dropDownWrapper}>
                <span className={css.dropDownInputWrapper}>
                    <input
                        className={css.dropDownInput}
                        type="text"
                        value={value}
                        placeholder={placeholder}
                        readOnly
                        onClick={() => {
                            onToggle();
                            closeOtherDropdowns();
                        }}
                    />
                    {isOpen ? (
                        <svg className={css.dropDownIcon} aria-hidden="true">
                            <use href="/sprite.svg#icon-arrow-up" />
                        </svg>
                    ) : (
                        <svg className={css.dropDownIcon} aria-hidden="true">
                            <use href="/sprite.svg#icon-arrow-down" />
                        </svg>
                    )}
                </span>
                {isOpen && (
                    <ul className={css.dropDown}>
                        {options.map((option) => (
                            <li
                                key={option}
                                className={`${css.dropDownItem} ${option.toString() === value ? css.dropDownInputSelected : ''}`}
                                onClick={() => {
                                    onSelect(option.toString());
                                    onToggle();
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </span>
        </label>
    </div>
);
export default CustomDropdown;