

//Question1

var firstVariable = "Programming";

//Question2

var person = {
    firstName: "Thiago",
    lastName: "Alcantara",
	age: 28,
}
console.log(person);

//Question3

var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
}
else{
    console.log("In stock");
}

//question4

var numbers = [3, 6, 17, 9, 21];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//question5 

for (var i = 15; i <= 25; i++) {
    console.log(i);
}

//question6

for (var i = 15; i <= 25; i++) {
    if(i === 20) {
        console.log(i);
    }
}

//question7

var tennisPlayers = [
	{
		name: "Nadal",
        grandSlams : 20,
        leftHanded: true,
	},
	{
		name: "Djokovic",
        grandSlams : 17,
        leftHanded: false,
	},
];

for (var i = 0; i < tennisPlayers.length; i++) {
    
    var champions = tennisPlayers[i].grandSlams;
    var handedness = tennisPlayers[i].leftHanded;
    var slamsHands = champions + " " + handedness;

    console.log(slamsHands);
}

//question8

function whatIDontLike(notLiked) {
    console.log("I don´t like" + " " + notLiked);
}

whatIDontLike("Giraffes");

//question9

function subtractThis(numberOne, numberTwo) {
    var sum = numberOne - numberTwo;
    console.log(sum); 
}
subtractThis (12, 8);

//question10 

var emptyArray = [];

function addToArray(pushArray) {
    emptyArray.push(pushArray);
    console.log(pushArray);   
}

addToArray("This is pushed..");
addToArray(9);

