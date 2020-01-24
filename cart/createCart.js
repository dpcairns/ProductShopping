import { cartItems } from '../cart/cartData.js';

import { renderCartRow } from '../utilities/renderCartRow.js';
import { calcOrderTotal } from '../utilities/calcOrderTotal.js';


//get dom
const tableBody = document.getElementById('table-body');
const finalTotalTd = document.getElementById('final-total');
const linetotalsClass = document.getElementsByClassName('line-total');

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
cartItems.forEach((item, index) => {
    renderAndAppendRow(item);
    pushNewLineTotal(index);
});

updateTotalLineCount();



