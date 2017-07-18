//if (rock){
 //if (other player chooses rock){
  // console.log("we tie");  
 //}
//}

//else if (scissors){
 //   console.log("I WIN!");
//}

//else if (paper){
  //  console.log("I lose..");
//}

var userchoice = "r";

var choices = ["r", "p", "s"];
var compchoice = choices[Math.floor(Math.random()*3)];

console.log("user choice: "+userchoice);
console.log("computer choice: "+computerchoice);

if (userchoice = computerchoice){
    console.log("draw game");
}
else if (userchoice--"r"){
    if (compchoice=="p"){
        console.log("computer wins");
    }
    else if (compchoice =="s"){
        console.log("human wins");
    }
    else{
        console.log("error! computer chose: ")+compchoice
    }
}