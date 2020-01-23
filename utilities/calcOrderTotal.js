// import productArray from '../products/productData.js';
// import { cartItems } from '../cart/cartData';

// import { calcLineItems } from './calcLineItem.js';


//sums array
export function calcOrderTotal(lineTotalsArray) {
    let finalTotal = 0;
    lineTotalsArray.forEach(line => {
        finalTotal = finalTotal + line;
    });
    return finalTotal;
}
