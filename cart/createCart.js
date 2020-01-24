// import { cartItems } from '../cart/cartData.js';
const storedData = localStorage.getItem('CART');
const cartItems = JSON.parse(storedData);

import { renderCartRow } from '../utilities/renderCartRow.js';
import { calcOrderTotal } from '../utilities/calcOrderTotal.js';


//get dom
const tableBody = document.getElementById('table-body');
const finalTotalTd = document.getElementById('final-total');
const linetotalsClass = document.getElementsByClassName('line-total');
const clearButton = document.getElementById('clear-button');

//create state
const linetotalsArray = [];

//single responsibility functions
function renderAndAppendRow(item) {
    const newRow = renderCartRow(item.id);
    tableBody.appendChild(newRow);
}
function pushNewLineTotal(index) {
    const currentLine = linetotalsClass[index];
    const newTotal = Number(currentLine.textContent.replace('$', ''));
    linetotalsArray.push(newTotal);

}
function updateTotalLineCount() {
    const finalTotalCount = calcOrderTotal(linetotalsArray);
    finalTotalTd.textContent = `$${finalTotalCount}`;
}

//do the things
if (cartItems) {
    cartItems.forEach((item, index) => {
        renderAndAppendRow(item);
        pushNewLineTotal(index);
    });
    updateTotalLineCount();
}

clearButton.addEventListener('click', () => {
    localStorage.removeItem('CART');
    location.reload();
});



