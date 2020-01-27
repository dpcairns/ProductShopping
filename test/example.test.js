// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;
import createProductLi from '../products/createProduct.js';

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    //static object
    const gwen = {
        id: 'gwen',
        name: 'Gwendolyn',
        image: 'gwen.png',
        description: 'Will keep you company, always.',
        category: 'Robot',
        price: 69,
    };
///html




    const expectedHTML = '<li class="Robot" title="Will keep you company, always."><h3>Gwendolyn</h3><img src="../assets/gwen.png" alt="image of a Gwendolyn"><p class="price">$69.00<button value="gwen">Add to Cart</button></p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const myHTML = createProductLi(gwen).outerHTML;
    // console.log(myHTML);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(myHTML, expectedHTML);
});
