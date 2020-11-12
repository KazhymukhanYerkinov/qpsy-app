export const textRequired = value => {
    if (value) return undefined;
    return "Поле, обязательное для заполнения";
}
export const emailRequired = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return "Неправильный электронный адрес (@)";
    else if (!value) return "Поле, обязательное для заполнения"
}
export const LengthCreator = (minLen, maxLen) => (value) => {
    if (value.length > maxLen) return `Максимальная длина ${maxLen} символов`
    else if (value.length < minLen) return `Минимальная длина ${minLen} символов`
    return undefined;   
}