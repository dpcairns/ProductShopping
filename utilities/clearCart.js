export function clearCart() {
    localStorage.removeItem('CART');
    location.reload();
}