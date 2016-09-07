/**
 * Created by ztr on 2016-09-07.
 */
var fs = require('fs');

// load food asynchronously
var food = fs.readFile('food.txt','utf8', function(err,food)
{
   console.log(food + '\n');
});

console.log('FOOD:');

var drinks = fs.readFile('drinks.txt','utf8', function(err,drinks)
{
    if(err){
        console.log(err);
    }
    else {
        console.log('DRINKS:');  //or line10
        console.log(drinks);
    }
});
