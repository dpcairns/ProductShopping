const test = QUnit.test;

import { cartItems } from '../cart/cartData.js';
import productArray from '../products/data.js';


import { findById } from '../utilities/findById.js';
import { calcLineItems } from '../utilities/calcLineItem.js';
// import { renderCart } from '../utilities/renderCart.js';

test('testing findById', function(assert) {

    //this is plumbus with an amount of 7
    const expectedResult = cartItems[0];

    const testResult = findById('plumbus', cartItems);

    assert.equal(expectedResult, testResult);
});

test('testing calcLineItems', function(assert) {
    //plumbus cost $9 ive given the static cart an amount of 7
    const expectedResult = 63;

    const cost = productArray[0].price; //the plumbus objects price $9
    const quantity = cartItems[0].amount; //amount of plum, 7
    console.log(`cost ${cost}, amount ${quantity}`);
    const testResult = calcLineItems(cost, quantity);

    assert.equal(expectedResult, testResult);

});

// test('testing renderCart', function(assert) {
//     const expectedResult = ;

//     const testResult = ;

//     assert.equal(expectedResult, testResult);

// });