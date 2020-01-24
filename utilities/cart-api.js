
import { findById } from '../utilities/findById.js';
export function addToCart(productObject) {
    const cart = localStorage.getItem('CART');
    let cartContents;
    if (cart) {
        const currentData = JSON.parse(cart);
        cartContents = currentData;
    } else {
        cartContents = [];
    }
    if (!cartContents)
        return false;
    const item = findById(productObject.id, cartContents);
    let quantity;
    if (item) {
        item.amount++;
        quantity = item.amount;
    } else {
        const lineItem = {
            id: `${productObject.id}`,
            amount: 1,
        };
        cartContents.push(lineItem);
        quantity = 1;
    }
    const newData = JSON.stringify(cartContents);
    localStorage.setItem('CART', newData);
    return quantity;
}

export function clearCart() {
    localStorage.removeItem('CART');
    location.reload();
}

export function getCart() {
    const storedData = localStorage.getItem('CART');
    const cartItems = JSON.parse(storedData);
    return cartItems;
}