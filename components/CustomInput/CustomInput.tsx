import css from "./CustomInput.module.css"

interface CustomDropdownProps {
    label: string;
    value: string;
    options: (string | number)[];
    placeholder: string;
    onSelect: (value: string) => void;
    isOpen: boolean;
    onToggle: () => void;
    inputId: string
}

const CustomInput = ({
                            label,
                            value,
                            options,
                            placeholder,
                            onSelect,
                            isOpen,
                            onToggle,
    inputId
                        }: CustomDropdownProps) => (
    <div className={css.filterGroup}>
        <label className={css.field} htmlFor={inputId}>
            <span className={css.label}>{label}</span>
        </label>
        <div className={css.dropDownWrapper}>
                <div className={css.dropDownInputWrapper}>
                    <input
                        className={css.dropDownInput}
                        type="text"
                        value={value}
                        placeholder={placeholder}
                        readOnly
                        onClick={onToggle}
                    />
                    {isOpen ? (
                        <svg className={css.dropDownIcon} aria-hidden="true">
                            <use href="/sprite.svg#icon-arrow-up"/>
                        </svg>
                    ) : (
                        <svg className={css.dropDownIcon} aria-hidden="true">
                            <use href="/sprite.svg#icon-arrow-down"/>
                        </svg>
                    )}
                </div>
            {isOpen && (
                <ul className={css.dropDown}>
                    {options.map((option) => (
                        <li
                            key={option}
                            className={`${css.dropDownItem} ${option.toString() === value ? css.dropDownInputSelected : ''}`}
                            onClick={() => {
                                onSelect(option.toString());
                            }}
                        >{option}
                        </li>
                    ))}
                </ul>
            )}
            </div>
    </div>
);
export default CustomInput;