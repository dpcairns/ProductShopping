import { getProductData } from '../utilities/cart-api.js';
import propagateProductLi from '../products/createProduct.js';

const products = getProductData();

const form = document.querySelector('form');
const parentList = document.getElementById('admin-product-list');
const submitButton = document.getElementById('admin-button');

console.log(products);

products.forEach(item => {
    if (products) {
        const newProduct = propagateProductLi(item);
        parentList.appendChild(newProduct);
    }
    
});



