import { cartItems } from '../cart/cartData.js';

import { renderCartRow } from '../utilities/renderCartRow.js';
import { calcOrderTotal } from '../utilities/calcOrderTotal.js';


//dom
const tableBody = document.getElementById('table-body');
const finalTotalTd = document.getElementById('final-total');
const linetotalsClass = document.getElementsByClassName('line-total');

//state
const linetotalsArray = [];


const myCartItems = cartItems;
myCartItems.forEach((item, i) => {
    const newRow = renderCartRow(item.id);
    tableBody.appendChild(newRow);

    const currentLine = linetotalsClass[i];
    const newTotal = Number(currentLine.textContent.replace('$', ''));
    linetotalsArray.push(newTotal);
});


const finalTotalCount = calcOrderTotal(linetotalsArray);

finalTotalTd.textContent = `$${finalTotalCount}`;




