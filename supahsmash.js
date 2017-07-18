var mashArray = ["PokeFloats", "Smashville", "DelfinoPlaza", "Final Destination"];

var firstQuestion = [1,2,3,4,5];

var secondQuestion = ["Mario", "Sonic"];

function scuffle() {
    var hits = prompt("How many times will you strike?")
    mashArray.push(hits)
    var fighter = prompt("Who will you choose to fight?")
    secondQuestion.push(fighter)
}

function battle() {
console.log("You fought secondQuestion in mashArray and hit them firstQuestion amount of times. Too bad. Luigi wins rofl.")
}
