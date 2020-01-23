import { cartItems } from '../cart/cartData.js';
import productArray from '../products/productData.js';


import { renderCartRow } from '../utilities/renderCartRow.js';
import { findById } from '../utilities/findById.js';

const tableBody = document.getElementById('table-body');




const newRow = renderCartRow('plumbus');

tableBody.appendChild(newRow);


