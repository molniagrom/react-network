// export const required = (value) => (!value ? "Field is required" : undefined);
//
// export const maxLengthCreator = (maxLength) => (value) =>
//     value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
//
// export const composeValidators = (...validators) => (value) => {
//     for (let validator of validators) {
//         const error = validator(value);
//         if (error) return error; // Если нашли ошибку — сразу возвращаем её
//     }
//     return undefined;
// };

export const validateField = (maxLength) => (value) => {
    if (!value) return "Field is required";
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;



    return undefined;
};
