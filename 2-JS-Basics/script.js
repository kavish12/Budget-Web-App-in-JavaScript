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

function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageMike);






