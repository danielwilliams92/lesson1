/**
 * Created by ztr on 2016-09-07.
 */
//link to node system libraru
var fs = require('fs');

// to open and read a food list
var food = fs.readFileSync('food.txt','utf8');

// print food list
console.log('FOOD:');
console.log(food);

// to open and read the drinks list
var drinks = fs.readFileSync('drinks.txt','utf8');

// print drinks list
console.log('DRINKS:');
console.log(drinks);