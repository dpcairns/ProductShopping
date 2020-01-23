import { findById } from './findById.js';
import productArray from '../products/productData.js';
import { cartItems } from '../cart/cartData.js';
import { calcLineItems } from './calcLineItem.js';

export const renderCartRow = function(productId) {
    
    const row = document.createElement('tr');

    const nameTd = document.createElement('td');
    const costTd = document.createElement('td');
    const amountTd = document.createElement('td');
    const totalTd = document.createElement('td');


    const currentItem = findById(productId, productArray);
    const cartInfo = findById(productId, cartItems);

    nameTd.textContent = currentItem.name;
    costTd.textContent = `$${currentItem.price.toFixed(2)}`;
    amountTd.textContent = cartInfo.amount;
    totalTd.textContent = `$${calcLineItems(currentItem.price, cartInfo.amount)}`;
    totalTd.className = 'line-total';

    row.appendChild(nameTd);
    row.appendChild(costTd);
    row.appendChild(amountTd);
    row.appendChild(totalTd);

    return row;
};