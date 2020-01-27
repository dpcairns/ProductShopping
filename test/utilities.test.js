const test = QUnit.test;

import productArray from '../products/productData.js';
import { cartItems } from '../cart/cartData.js';

import { findById } from '../utilities/findById.js';
import { calcLineItems } from '../utilities/calcLineItem.js';
import { renderCartRow } from '../utilities/renderCartRow.js';
import { calcOrderTotal } from '../utilities/calcOrderTotal.js';
import { addProductData } from '../utilities/cart-api.js';

//feeding local storage for test
const testArray = [{ id: 'plumbus', amount: 7 }];
const data = JSON.stringify(testArray);
localStorage.setItem('CART', data);

test('testing findById', function(assert) {

    //this is plumbus with an amount of 7
    const expectedResult = cartItems[0];

    const testResult = findById('plumbus', cartItems);

    assert.equal(testResult, expectedResult);
});

test('testing calcLineItems', function(assert) {
    //plumbus cost $9 ive given the static cart an amount of 7
    const expectedResult = 69.86;

    const cost = productArray[0].price; //the plumbus objects price $9
    const quantity = cartItems[0].amount; //amount of plum, 7
    // console.log(`cost ${cost}, amount ${quantity}`);
    const testResult = calcLineItems(cost, quantity);

    assert.equal(testResult, expectedResult);

});
        
test('calcOrderTotal', function(assert) {

    const testArray = [5, 6, 9, 5];
    const expectedResult = 25;   
    const testResult = calcOrderTotal(testArray);
        
    assert.equal(testResult, expectedResult);
});

test('testing add product', function(assert) {

    const expectedArray = JSON.stringify([0, 4, 5, 2, 7]);

    const myArray = [0, 4, 5, 2];

    const newNum = 7;

    const myResult = addProductData(newNum, myArray);

    assert.equal(myResult, expectedArray);


});