export function getCart() {
    const storedData = localStorage.getItem('CART');
    const cartItems = JSON.parse(storedData);
    return cartItems;
}

export function addToCart() {

}

export function clearCart() {
    localStorage.removeItem('CART');
    location.reload();
}