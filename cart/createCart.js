// import { cartItems } from '../cart/cartData.js';
const storedData = localStorage.getItem('CART');
const cartItems = JSON.parse(storedData);

import { renderCartRow } from '../utilities/renderCartRow.js';
import { calcOrderTotal } from '../utilities/calcOrderTotal.js';
import { clearCart } from '../utilities/clearCart.js';


//get dom
const tableBody = document.getElementById('table-body');
const finalTotalTd = document.getElementById('final-total');
const linetotalsClass = document.getElementsByClassName('line-total');
const clearButton = document.getElementById('clear-button');
const orderButton = document.getElementById('order-button');

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
function styleButtonClick(button) {
    button.style.border = '4px solid gold';
    alert('you clicked');
}

//do the things
if (cartItems) {
    cartItems.forEach((item, index) => {
        renderAndAppendRow(item);
        pushNewLineTotal(index);
    });
    updateTotalLineCount();
} else {
    orderButton.disabled = 'true';
}

clearButton.addEventListener('click', () => {
    styleButtonClick(clearButton);
    clearCart();
});


const orderMessage = JSON.stringify(cartItems, true, 2);

orderButton.addEventListener('click', () => {
    alert(orderMessage);
    clearCart();
    window.location = '../';
});


