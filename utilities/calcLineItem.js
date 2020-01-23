export const calcLineItems = function(cost, amount) {
    const total = cost * amount;
    return total.toFixed(2);
};