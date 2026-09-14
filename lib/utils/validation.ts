export const isValidField = (value: string): boolean => {
    console.log("isValid Field: ", value)
    return value.trim() !== '';
};

export const isValidName = (value: string): boolean => {
    return /^[a-zA-Z\s]+$/.test(value);
};

export const isValidEmail = (value: string): boolean => {
    // return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/.test(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(value);
    console.log(`Validating email: "${value}" -> ${isValid}`); // Debug
    return isValid;
};