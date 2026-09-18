export const isValidField = (value: string): boolean => {
    return value.trim() !== '';
};

export const isValidName = (value: string): boolean => {
    return /^[a-zA-Z\s]+$/.test(value);
};

export const isValidEmail = (value: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(value);
    return isValid;
};