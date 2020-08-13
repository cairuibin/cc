export const isEmpty = (v) => {
    return typeof v === 'undefined' || v === null || v === "";
}

export const isNotEmpty = (v) => {
    return !isEmpty(v);
}