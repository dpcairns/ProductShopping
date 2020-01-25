
export const findById = (someId, someArray) => {
    let item;
    someArray.forEach(arrayItem => {
        if (someId === arrayItem.id) {
            item = arrayItem;
        }
    });
    return item;
};