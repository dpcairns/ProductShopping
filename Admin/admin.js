import { getProductData, addProductData} from '../utilities/cart-api.js';
import propagateProductLi from '../products/createProduct.js';


//dom
// const form = document.querySelector('form');
const parentList = document.getElementById('admin-product-list');
const submitButton = document.getElementById('admin-button');

//state
const products = getProductData();

//do things
products.forEach(item => {
    if (products) {
        const newProduct = propagateProductLi(item);
        parentList.appendChild(newProduct);
    }
});


submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.querySelector('form');
    const newData = new FormData(form);
    
    const numberizePrice = Number(newData.get('price'));
    
    const newProduct = {
        name: newData.get('name'),
        id: newData.get('id'),
        price: numberizePrice,
        image: newData.get('image'),
        url: true
    };
    
    
    const newProductLi = propagateProductLi(newProduct);
    
    console.log(newProductLi);

    parentList.appendChild(newProductLi);
    
    // products.push(newProduct);
    
    // addProductData(newProduct);
    // event.reset;
});

