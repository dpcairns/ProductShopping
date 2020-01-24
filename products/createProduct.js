
import productArray from './productData.js';
import { findById } from '../utilities/findById.js';
import { addToCart } from '../utilities/cart-api.js';

//get dom
const productListContainer = document.getElementById('product-list');


//loop through array and render products
if (productArray) {
    productArray.forEach(product => {
        propagateProductLi(product);
    });
}

//main func
function propagateProductLi(productObject) {
    const li = createNewLi(productObject);

    createAndAppendH3(productObject, li);

    createAndAppendImg(productObject, li);

    createAndAppendP(productObject, li);

    if (productListContainer) {
        productListContainer.appendChild(li);
    }
    return li;
}
export default propagateProductLi; //for testing

//single responsibility functions
function createAndAppendP(productObject, li) {
    const p = document.createElement('p');
    p.className = 'cost';
    p.textContent = `$${productObject.price.toFixed(2)}`;

    createAndAppendButton(productObject, p);

    li.appendChild(p);
}

function createAndAppendButton(productObject, p) {
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = productObject.id;
    button.addEventListener('click', buttonAction(productObject));
    p.appendChild(button);
}
    
function buttonAction(productObject) {
    return () => {
        const quantity = addToCart(productObject); //this also calls the add to cart func
        const name = findById(productObject.id, productArray).name;
        let message;
        if (quantity === 1) {
            message = `You've added ${name} to the cart.`;
        } else {
            message = `You have ${quantity} ${name}s in the cart.`;
        }
        alert(message);
    };
}

function createAndAppendImg(productObject, li) {
    const img = document.createElement('img');
    img.src = `../assets/${productObject.image}`;
    img.alt = `image of a ${productObject.name}`;
    li.appendChild(img);
}

function createAndAppendH3(productObject, li) {
    const h3 = document.createElement('h3');
    h3.textContent = productObject.name;
    li.appendChild(h3);
}

function createNewLi(productObject) {
    const li = document.createElement('li');
    li.className = productObject.category;
    li.title = productObject.description;
    return li;
}
