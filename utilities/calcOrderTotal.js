
//sums array
export function calcOrderTotal(lineTotalsArray) {
    let finalTotal = 0;
    lineTotalsArray.forEach(line => {
        finalTotal = finalTotal + line;
    });
    return finalTotal.toFixed(2);
}
