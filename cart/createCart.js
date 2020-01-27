
import { renderCartRow } from '../utilities/renderCartRow.js';
import { calcOrderTotal } from '../utilities/calcOrderTotal.js';
import { findById } from '../utilities/findById.js';
import { getCart, clearCart, getProductData } from '../utilities/cart-api.js';

//get dom
const tableBody = document.getElementById('table-body');
const finalTotalTd = document.getElementById('final-total');
const linetotalsClass = document.getElementsByClassName('line-total');
const clearButton = document.getElementById('clear-button');
const orderButton = document.getElementById('order-button');

//create state
const linetotalsArray = [];
const cartItems = getCart();
const productArray = getProductData();

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
    let messageLine;
    if (cartItems.length === 1) {
        const name = findById(cartItems[0].id, productArray).name;
        const amount = cartItems[0].amount;      
        if (amount === 1) {
            messageLine = `a ${name} `;
        } else {
            messageLine = `${amount} ${name}s `;
        }
        orderMessage += messageLine;
    } else {

        cartItems.forEach((item, i) => {
            const name = findById(item.id, productArray).name;
            const amount = item.amount;  

            if (i < cartItems.length - 1) {
                if (amount === 1) {
                    messageLine = `a ${name}, `;
                } else {
                    messageLine = `${amount} ${name}s, `;
                }
                orderMessage += messageLine;
            } else {
                if (amount === 1) {
                    messageLine = `and a ${name} `;
                } else {
                    messageLine = `and ${amount} ${name}s `;
                }
                orderMessage += messageLine;
            }
        });
    }
    const finalTotalCount = calcOrderTotal(linetotalsArray);
    orderMessage += `on the way, and it only cost $${finalTotalCount}!`;
    return orderMessage;
}
