import { getProductData, addProductData, removeProduct} from '../utilities/cart-api.js';
import propagateProductLi from '../products/createProduct.js';


//dom
const form = document.querySelector('form');
const parentList = document.getElementById('admin-product-list');;

//state
const products = getProductData();

//do things
products.forEach(item => {
    if (products) {
        const newProduct = propagateProductLi(item);
        addRemoveButton(item, newProduct);
        parentList.appendChild(newProduct);
    }
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newData = new FormData(form);
    
    const numberizePrice = Number(newData.get('price'));
    
    const newProduct = {
        name: newData.get('name'),
        id: newData.get('id'),
        price: numberizePrice,
        image: newData.get('image'),
        url: true
    };
    
    let match = false;
    products.forEach(item => {
        if (item.id === newProduct.id) {
            alert('Product already Exists');
            match = true;
        }
    });
    if (match) return;

    const newProductLi = propagateProductLi(newProduct);
    addRemoveButton(newProduct, newProductLi);
    parentList.appendChild(newProductLi);

    addProductData(newProduct, products);

    form.reset();
});

function addRemoveButton(productObject, li) {
    const removeButton = document.createElement('button');

    removeButton.textContent = 'Remove';
    removeButton.value = productObject.id;
    removeButton.className = 'remove';
    removeButton.addEventListener('click', () => {
        removeProduct(productObject, products);
    });
    li.appendChild(removeButton);

}

