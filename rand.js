function rand(upperBd){
    console.log(Math.floor(Math.random()*upperBd));
}

var lunches = ["chinese", "mexican", "American", "Japanese", "soul food"];

var lunch_today = lunches[rand(lunches.length)];

console.log(lunch_today);