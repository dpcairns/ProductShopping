//static design
// const plumbus = {
//     id: 'plumbus',
//     name: 'A Perfect Pink Plumbus',
//     image: 'plumbus.jpg',
//     description: 'No need to explain what a plumbus does. It\'s a plumbus, explaining it is like making a novel on how to crap.',
//     category: 'Household Object',
//     price: 9,
// };






//import product array
import productArray from './productData.js';

//get dom
const productListContainer = document.getElementById('product-list');

//create li function
function createProductLi(productObject) {
    const li = document.createElement('li');
    li.className = productObject.category;
    li.title = productObject.description;

    const h3 = document.createElement('h3');
    h3.textContent = productObject.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${productObject.image}`;
    img.alt = `image of a ${productObject.name}`;
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'cost';
    p.textContent = `$${productObject.price.toFixed(2)}`;
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = productObject.id;
    p.appendChild(button);
    li.appendChild(p);

    if (productListContainer) {
        productListContainer.appendChild(li);
    }
    return li;
}

//loop through array and render products
if (productArray) {
    for (let i = 0; i < productArray.length; i++) {
        createProductLi(productArray[i]);
    }
}

export default createProductLi;