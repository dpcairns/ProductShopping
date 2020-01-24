//matches an ID the long way:
export const findById = (someId, someArray) => {
    for (let i = 0; i < someArray.length; i++) {
        const arrayItem = someArray[i];
        if (someId === arrayItem.id) {
            return arrayItem;
        }
    }
}