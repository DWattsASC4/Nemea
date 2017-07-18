function rand(upperBd){
    return Math.floor(Math.random()*upperBd);
}

function randLetter() {
    var alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return alphabet[rand(alphabet.length)];
} 
console.log(randLetter());

function randWord() { 
    var word = ""
    for(var i = 0; i<5; i++){
        word = word + randLetter();
    
    }
    return word;
}
console.log(randWord());

function randSentence() {
    var sentence = ""
    for(var i = 0; i<6; i++){
        sentence = sentence + " " + randWord();

    }
    return sentence;
}
console.log(randSentence());

function randWord() {
    var str = "";
    for ( i=1 i<rand(11); i++ ) {
        str += randLetter();
    }
    return str;
}

array1 + ["pikachu",23,100];
array2 + ["Charizard",50,200];

function pokeAtk(array1,array2) {

    array2[2] -= array1[1];
    return array2;
}
console.log(pokeAtk(array1,array2));