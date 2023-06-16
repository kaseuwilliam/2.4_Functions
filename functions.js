// let array = [1,2,3,4,"William", "Hello"]
// let array2 = ["William", "Mike", "Matthew", "Jeff"]


// let counter = 0;
// let index = 0;

// while(array[index] != null){

//     counter++;
//     index++;
// }

// console.log(`The length of array is ${array.length}`)

// let counter2 = 0;
// let index2 = 0;

// while(array2[index2] != null){

//     counter2++;
//     index2++;
// }

// console.log(`The length of array2 is ${array2.length}`)

// let arrayNames = ["William", "Mike", "Matthew", "Jeff"]

// let concatString = arrayNames.join(", ");
// console.log(concatString)

// let concatString = "";

// for (let i=0; i<arrayNames.length; i++){

//     concatString = concatString + arrayNames[i]+" ";
// }

// console.log(concatString)

// "William Mike Matthew Jeff"




// temp for the week
// let temp = [50,70,88,45,65,92,100]

// function name (parameters, parameters2,...){
//     // code that is to be executed
//     return value
// } 

// function greet (firstName, lastName){

//     // console.log(`Hello ${firstName} ${lastName}`);

//     return `Hello ${firstName} ${lastName}` 
// }

// let greetingString = greet("William", "Kaseu");

// console.log(`This is greetingString: ${greetingString}`)

// let greetingString = "Hello William Kaseu"


// let a = 5;
// let b = 10;
// // let c = a + b;


// // num1 should be a number
// function addTwoNumbers(num1, num2){
//     // this result does a b c
//     let result = num1 + num2;
//     return result;
// } 

// let c = addTwoNumbers(100, 200);
// console.log(c)


// function calculator(num1, num2, operator){

//     if (typeof num1 !== "number" || typeof num2 !== "number" ){
//         throw new Error("The arguments are invalid");
//     }

//     let result;
//     // if adding
//     if(operator==="+"){
//         result = num1 + num2
//         // return result;

//     } else if (operator ==="-"){
//         result = num1 - num2
//         // return result;

//     } else if (operator === "*"){
//         result = num1 * num2
//         // return result;

//     } else if (operator === "/"){
//         result = num1 / num2
//         // return result;

//     } else if (operator === "%"){
//         result = num1 % num2
//         // return result;

//     } else{
//         return "You did not input a valid operator"
//     }

//     return result;
// }

// let addition = calculator(12, 15, "+");
// let sub = calculator(12, 15, "-");
// let mul = calculator(12, 15, "*");
// let div = calculator(12, 15, "/");
// let mod = calculator(122, 15, "%");
// let other = calculator(12, 15, "p");

// console.log(`Addition: ${addition}`);
// console.log(`Subtraction: ${sub}`);
// console.log(`multiplication: ${mul}`);
// console.log(`division: ${div}`);
// console.log(`mod: ${mod}`);
// console.log(`Other: ${other}`);

 
let dallasTemp = [50,70,88,45,65,92,100]
let chicagoTemp = [-1,50,55,45,30,30,15]
let nycTemp = [40,30,38,65,25,12,30]
let allCities = dallasTemp.concat(chicagoTemp, nycTemp);

function average(tempOfCity){

    let sums = 0;

    for(temp of tempOfCity){
        sums = sums + temp;
    }

    let result = sums/tempOfCity.length;
    return result
}

let dallasAvg = average(dallasTemp);
let chicagoAvg = average(chicagoTemp);
let nycAvg = average(nycTemp);
let allAvg = average(allCities) ;

console.log(`Dallas average: ${dallasAvg}`)
console.log(`Chicago average: ${chicagoAvg}`)
console.log(`NYC average: ${nycAvg}`)
console.log(`Average of ALL Cities: ${allAvg}`)
