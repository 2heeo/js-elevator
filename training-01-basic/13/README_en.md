# Exercise 13

Write a JavaScript program that simulates a vending machine.

Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.
The coins used for the change are the following: [500, 100, 50, 10]

The return value is an object with 2 properties:
- product: the product name that the user selected.
- change: an array of coins (can be empty, must be sorted in descending order).

Products:
- #1. Orange juice [₩750]
- #2. Coffee [₩700]
- #3. Chocolate [₩2.000]

케이스:
- The products are fixed and you can find them in the Tests tab.
- If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
- If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
- If there's no change, return an empty array as the change.


## Example

###Purchase action:
```javascript
vendingMachine.purchase(1, '₩1.000');
// { product: 'Orange juice', change: [ 100, 100, 50 ] }

vendingMachine.purchase(3, '₩100');
// { error: 'Missing ₩1.900 for this product' }

vendingMachine.purchase(1, '₩1.900');
// { product: 'Chocolate', change: [] }

vendingMachine.purchase(0, '₩10.000');
// { error: 'Enter a valid product number' }
```

###Other action:
```javascript
vendingMachine.getCheapestProduct();
// { product: 'Coffee' }

vendingMachine.returnCredit();
// { credit: 100 }
// Return inserted money but not enough to buy a product
```
