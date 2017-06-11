//Lecture: variable
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//Lectiure: variable 2

//var name = 'John';
//var age = 26;

//console.log(name + age); //type coercion
//console.log(age + age); //simple add

var job, isMarried;

//console.log(job); //undefined variable
/*
job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried); //type coercion, all is string

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//code is read as a sequence

//var lastName = prompt('What is the last anme?');

//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);
*/

// Lectur: Operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26;
ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

//if-else statement
/*
var name = 'john';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes'){
    console.log(name + ' is married');
}else{
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;

/*if(isMarried){
    console.log('YES!');
}else{
    console.log('NO');
}*/
/*
if(isMarried){
    console.log('YES!');
}

//comparison operators
if(23 === "23"){
    console.log("something to print.....");
}
*/

//boolean logic and switch
/*
var age = 20;

if(age < 20){
    console.log('John is a teenager');
}else if(age >= 20 && age < 30){
    console.log('John is a young man');
}
else{
    console.log('John is a man');
}

var job ="teacher";

job = prompt('What does jOhn do?');

switch(job){
    case 'teacher':
        console.log('John teaches kid');
        break;
    case 'driver':
        consoel.log('John drives a cab in San Diego');
        break;
    case 'cop':
        consoel.log('John  helps fight crime');
        break;
    default:
        console.log('John does something else');
          }

*/
////////////////////////////////////
//Lecture: Functions
/*
function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//console.log(ageMike);

function yearsUnitlRetirement(name, yearsOfBirth){
    var age = calculateAge(yearsOfBirth);
    var retirement = 65 - age;

    if(retirement >= 0){
        console.log(name + " retires in " + retirement + " years");
    }else{
        console.log("Already Retired");
    }

}

yearsUnitlRetirement('John', 1990);
yearsUnitlRetirement('Mike', 1969);
yearsUnitlRetirement('Mary', 1948);

*/

////////////////////////////////
//Lecture: Statement and Expressions
/*
function someFun(par){
    //code
}

var someFun =function(par){
    //code
}

//Expressions
3+4
var x = 3;

//statement
if(x === 5){
    //do soemthing
}
*/

///////////////////////////////////////////
//Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);

names[1] = 'Ben';

console.log(names);


var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift("Mr. ");
john.pop();
john.shift();
//alert(john.indexOf('Smith'));
console.log(john);

if(john.indexOf('Teacher') === -1){
    console.log('John is NOT a teacher.');
}
*/

/////////////////////////////////////
//Lecture: Objects
 //key values pairs in objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};


console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

//different way to create object

var jane = new Object();
jane.name = 'jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

///////////////////////////////
//Lecture: Objects and Methods
/* v1.0
 var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        return 2016 - this.yearOfBirth;
    }
};

//this --> this means the object john
//console.log(john.calculateAge(1990));

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/
//v2.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
       this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);

*/

/////////////////////////////////////////////////////
//Lecture: Loops
/*
for(var i=0; i<10; i++){
    //console.log(i);
}

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/
/*
var names = ['john', 'jane', 'mary', 'mark', 'bob'];
/*
for (var i=0; i<names.length; i++){
    console.log(names[i]);
}*/

//while loops
//condition evaluated before each condition
/*
var i=0;
while(i < names.length){
    console.log(names[i])
    i++;
}

var i=0;
while(i < names.length){
    console.log(names[i])
    i++;
}
//end of basics

*/
