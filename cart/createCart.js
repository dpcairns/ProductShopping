// import { cartItems } from '../cart/cartData.js';
const storedData = localStorage.getItem('CART');
const cartItems = JSON.parse(storedData);

import { renderCartRow } from '../utilities/renderCartRow.js';
import { calcOrderTotal } from '../utilities/calcOrderTotal.js';
import { clearCart } from '../utilities/clearCart.js';
import { findById } from '../utilities/findById.js';
import productArray from '../products/productData.js';

//get dom
const tableBody = document.getElementById('table-body');
const finalTotalTd = document.getElementById('final-total');
const linetotalsClass = document.getElementsByClassName('line-total');
const clearButton = document.getElementById('clear-button');
const orderButton = document.getElementById('order-button');

//create state
const linetotalsArray = [];

//do the things
if (cartItems) {
    cartItems.forEach((item, index) => {
        renderAndAppendRow(item);
        pushNewLineTotal(index);
    });
    updateTotalLineCount();
} else {
    orderButton.disabled = 'true';
    clearButton.disabled = 'true';
}

clearButton.addEventListener('click', () => {
    styleButtonClick(clearButton);
    clearCart();
});

orderButton.addEventListener('click', () => {
    styleButtonClick(orderButton);
    alert(createOrderMessaage());
    clearCart();
    window.location = '../';
});


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
function styleButtonClick(butn) {
    //eventual clicking animation
}
function createOrderMessaage() {
    let orderMessage = 'You have ';
    cartItems.forEach(item => {
        const name = findById(item.id, productArray).name;
        const amount = item.amount;        
        const messageLine = `${amount} ${name}s, `;
        orderMessage += messageLine;
    });

    orderMessage += 'on the way!';
    return orderMessage;
}