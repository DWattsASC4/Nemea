//var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
//var n = prompt('How many more times? ');

// var counter = 1;
// while(counter < 11) {
    // console.log(counter);
    // counter++;
//}

var prompt = require('prompt - sync');
var money = 1000;
var items = [];

while (money > 99) {
    console.log("you have $" + money + "left. Shirt - 100, Computer = $500")
    var answer = prompt("which item do you want to buy? ")
    if (answer == "Shirt") {
        money -= 100
        items.push("Shirt");
        console.log("you just bought a dope ass T shirt ayy");

    }
    else if (answer == "computer"){
        money -= 400
        items.push("Computer");
        console.log("Nigga you dont have enough money.");
    }
    else {
        console.log("Aight bye fam");
    
    }
}