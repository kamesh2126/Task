// (Note : Anonymous , IIFE, Arrow Function including)
// Question no:1   print oddNumbers
//Anonymus function
function funcOne () {
  for(i=1;i<=100;i++)
  if(i%3==0)
  console.log(i);
 }
 
funcOne();

 //IIFE function
(function funcOne(){
  for(i=1;i<=100;i++)
  if(i%3==0)
  console.log(i);
} )();
  funcOne();

  // Arrow function
const funcArrowFour = () => {
  for(i=1;i<=100;i++)
  if(i%3==0)
  console.log(i)
}
funcArrowFour();

// Question no:2  Convert all the strings to title caps in a string array
//Anonymus function
function funcOne () {
  let string = "hello world ";
  let cap = string.charAt(0).toUpperCase() + string.slice(1);
  console.log(cap);
}
  funcOne();


  // IIFE function

  (function funcOne () {
    let string = "hello world";
    let cap = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(cap);
  })()
    funcOne();

// Arrow function
  let funcArrowFive = () => {
    let string = "hello world";
    let cap = string.charAt(0).toUpperCase()+string.slice(1);
    console.log(cap);

  }
  funcArrowFive();


// Question no:3 Sum of all numbers in an array
//Anonymus function

let No1 = 56;
let No2 = 36;
function funcOne (){
  let result = No1+No2;
  console.log(result);
}
funcOne();


//IIFE function

let No3 = 56;
let No4 = 36;
(function sumNumbers(num1,num2){
  let result = num1+num2;
  console.log(result);
})(No3,No4);
 
// Arrow function
let no1 = 56;
let no2 = 36;
let funcArrowOne = () =>{
let result = no1+no2;
console.log(result);
}
funcArrowOne();


// Question no: 4 Return all the prime numbers in an array

// ananymous function

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

var primeNumbers = function (arr) {
  return arr.filter(function (num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (var i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  });
}(numbers);

console.log(primeNumbers);



// IIFE function


var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

var primeNumbers = (function (arr) {
  return arr.filter(function (num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (var i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  });
})(numbers);

console.log(primeNumbers);

//Arrow function

const numbers = [2, 3, 5, 7, 8, 11, 12, 13, 17];

const isPrime = num => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const primeNumbers = numbers.filter(num => isPrime(num));

console.log(primeNumbers);


//Question no: 5   Return all the palindromes in an array

// Anonymus function
var words = ["Splender", "Hero", "Auto", "Cooper", "Honda"];

var palindromes = function (arr) {
  return arr.filter(function (word) {
    var reversed = word.split("").reverse().join("");
    return word === reversed;
  });
}(words);

console.log(palindromes);



// IIFE function

var words = ["Splender", "Hero", "Auto", "Cooper", "Honda"];

var palindromes = (function (arr) {
  return arr.filter(function (word) {
    var reversed = word.split("").reverse().join("");
    return word === reversed;
  });
})(words);

console.log(palindromes);

// Arrow function
const words = ["Kawasaki", "Porche", "Auto", "Chamber", "World"];

const isPalindrome = word => {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
};

const palindromeWords = words.filter(word => isPalindrome(word));

console.log(palindromeWords);

// Question no: 6  Return median of two sorted arrays of the same size

// Anonymous function

var array1 = [1, 3, 5, 7];
var array2 = [2, 4, 6, 8];

var findMedian = function (arr1, arr2) {
  var merged = arr1.concat(arr2);
  var sorted = merged.sort(function (a, b) {
    return a - b;
  });
  var length = sorted.length;
  
  if (length % 2 === 0) {
    
    var mid1 = sorted[length / 2 - 1];
    var mid2 = sorted[length / 2];
    return (mid1 + mid2) / 2;
  } else {
   
    return sorted[Math.floor(length / 2)];
  }
}(array1, array2);

console.log(findMedian);


// IIFE function

var array1 = [1, 3, 5, 7];
var array2 = [2, 4, 6, 8];

var findMedian = function (arr1, arr2) {
  var merged = arr1.concat(arr2);
  var sorted = merged.sort(function (a, b) {
    return a - b;
  });
  var length = sorted.length;
  
  if (length % 2 === 0) {
   
    var mid1 = sorted[length / 2 - 1];
    var mid2 = sorted[length / 2];
    return (mid1 + mid2) / 2;
  } else {
    
    return sorted[Math.floor(length / 2)];
  }
}(array1, array2);

console.log(findMedian);


// Question no: 7  Remove duplicates from an array

// Anonymus function

var array = [1, 8, 8, 3, 7, 7, 5, 10, 10];

var uniqueArray = function (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}(array);

console.log(uniqueArray);


// IIFE Function

var array = [1, 8, 8, 3, 7, 7, 5, 10, 10];

var uniqueArray = (function (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
})(array);

console.log(uniqueArray);


// Question no: 8 Rotate an array by k times
// Anonymos function

var array = [1, 2, 3, 4, 5];
var k = 3;

var rotateArray = function (arr, rotations) {
  for (var i = 0; i < rotations; i++) {
    var temp = arr.shift();
    arr.push(temp);
  }
  return arr;
}(array, k);

console.log(rotateArray);


// IIFE function 
var array = [1, 2, 3, 4, 5];
var k = 3;

var rotateArray = (function (arr, rotations) {
  for (var i = 0; i < rotations; i++) {
    var temp = arr.shift();
    arr.push(temp);
  }
  return arr;
})(array, k);

console.log(rotateArray);