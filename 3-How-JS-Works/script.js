///////////////////////////////////////
// Lecture: Hoisting

//functions
/*
calculateAge(1965);

function calculateAge(year){
    console.log(2016 - year);
}
//hoisting only works for functions
//retirement(1965);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

//variables
console.log(age);
var age = 23;
//console.log(age);

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);


*/









///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third(){
    var d = 'John';
    //console.log(c);
    console.log(a + d);
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);
//this keyword is the window object in global scontext4
//this is default object
/*
calculateAge(1985);

function calculateAge(year){
    console.log(2016 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        /*
        function innerFunction(){
            console.log(this);
        }

        innerFunction();
        */
    }
}

john.calculateAge();

//regular function call --> default object is window, even though it is written iside the funtion

var mike ={
    name: 'Mike',
    yearOfBirth: 1984
};

//method borrowing

mike.calculateAge = john.calculateAge; //no paranthesis
mike.calculateAge();
