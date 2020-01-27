import { findById } from './findById.js';
import { calcLineItems } from './calcLineItem.js';
import { getCart, getProductData } from './cart-api.js';

const cartItems = getCart();
const productArray = getProductData();

export const renderCartRow = function(productId) {
    if (!productId) return false;
    
    //data
    const currentItem = findById(productId, productArray);
    const cartInfo = findById(productId, cartItems);
    
    //element creation
    const row = document.createElement('tr');

    const nameTd = document.createElement('td');
    const costTd = document.createElement('td');
    const amountTd = document.createElement('td');
    const totalTd = document.createElement('td');

    //updating element content
    nameTd.textContent = currentItem.name;
    costTd.textContent = `$${currentItem.price.toFixed(2)}`;
    amountTd.textContent = cartInfo.amount;
    totalTd.textContent = `$${calcLineItems(currentItem.price, cartInfo.amount)}`;
    totalTd.className = 'line-total';

    //appending
    row.appendChild(nameTd);
    row.appendChild(costTd);
    row.appendChild(amountTd);
    row.appendChild(totalTd);

    return row;
};