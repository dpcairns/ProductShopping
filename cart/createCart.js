import { cartItems } from '../cart/cartData.js';
import productArray from '../products/productData.js';


import { renderCartRow } from '../utilities/renderCartRow.js';
import { findById } from '../utilities/findById.js';




const tableBody = document.getElementById('table-body');
const finalTotalTd = document.getElementById('final-total');

const myCartItems = cartItems;


myCartItems.forEach(item => {
    const newRow = renderCartRow(item.id);
    tableBody.appendChild(newRow);
});


const finalTotalCount = 5;

finalTotalTd.textContent = `$${finalTotalCount}`;




