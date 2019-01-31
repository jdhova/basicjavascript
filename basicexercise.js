

// Palindrome

let splittedWords = str.split(" ")

splittedWords.forEach(  (word)=> {
  let reverseword = word.toLowerCase().split("").reverse().join('')
     if (reverseword === word.toLocaleLowerCase()) {
       console.log("Palindrone",word)
  
     }
});

// SPEED CHECKER 

(speedChecker(200))

function speedChecker(speed){

const speedLimit = 70
const pkm = 5
const maximumPoints = 12

  if (speed < speedLimit + pkm)
    console.log (points,"ok") 
    else { 
        const points = Math.floor ((speed - speedLimit)/ pkm)
        if (points >= maximumPoints)
        console.log (points, "points " +"licence Revoked") 
        else 
        console.log (points, "points ", +"warning")
      } 
  }



// ODD EVEN  ### write a function with one arg takes a number and 
//  write even of odd numbers

console.log(oddeven(11))

function oddeven(num) {
    for (let i = 0; i < num; i++) {
      if (i % 2 === 0)
      console.log(i,"even")
      else 
      console.log(i,"odd")
    }
  }
    
  //OR 

  oddeven(10)
  
  function oddeven(num){
    for(let i = 0; i < 11; i++){
     const message = (i % 2 === 0)? 'even':'odd'
     console.log(i,message)
    }
  }
  
///  Count Truty and Falsy
const array = [1,2,3,4]
console.log(countTruty(array))

function countTruty(array){
    let count = 0;
    for (let value of array)
    if (value)
    ++count
    return count;
}

// check string

  const person = {
    name :"jude",
    age : 22,
    sex: "male",
    height : 1.43
  }
  cheStr(person)
  
  function cheStr(val) {
    for (let index in val)
    if (typeof val[index] === "string")
    console.log(val[index], "string")
    else { 
      if (typeof val[index] === "number")
      console.log(val[index], "number")
    }
  }

  // check Multiples of 3 and 5

  function multiples(num) {
    for (let i = 0; i < num; i++) {
     if ((i % 3 === 0) || (i % 5 ===0))
      console.log(i,"multiples")
      else 
      console.log(i,"non multiple")
    }
  }
  
  // Calc Grades
const grades = [ 90,90,80]
console.log(calgrade(grades))

function calgrade(grades) {
    let sum = 0 
    for (let grade of grades) 
    sum+= grade 
    const avgrade = Math.floor((sum / grades.length))

     console.log(avgrade)
    if (avgrade < 50) return "fail"
    if (avgrade < 60) return "pass"
    if (avgrade < 70) return "good"
    if (avgrade > 70) return " exellent"  
}


// Counting Stars

showStar(2)
function showStar(rowLimit) {
  for (let numrows = 0; numrows <= rowLimit; numrows++ ) {
    let pattern = ''

  for (let i = 1; i <= numrows; i++)
    pattern += '*'

  console.log(pattern)
  }
}

// Prime numbers ( to be reviewed)

primeNum(10)
function primeNum (numLimit){
  for (let num = 2; num <= numLimit; num++) {
        let isPrime = true

      

    for (let prime = 2; prime < num; prime++ ) {
      if (prime % num === 0) {
       let isPrime = false
         break;
      }
    }
    if (isPrime) console.log(num)
  }

}

// Factory Function

let address = createAddress('a','b','c')

console.log(address)

function createAddress (street,city,state) {
return {
  street,
  city,
  state
 }
}

// Constructor Function

let add = new Address('a','b','c')

console.log(add)

function Address (street, city, state){
  this.street = street,
  this.city = city,
  this.state = state
}



// FILTERING AN ARRAY OF OBJECTS

const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

let invalidEntries = 0;

function filterByID(obj) {
  if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

const arrByID = arr.filter(filterByID);
console.log(arrByID)  

 // SUM OF ELEMENTS REDUCE METHOD
const numbers = [1,3,4,2,4,3]

const sum = numbers.reduce((a,b) => a+b)
console.log(sum)

// CHECK IF ELEMENT IS INCLUDED

const allEggs = [1,2,3,4,5,6,7,3]

const goodEggs = except(allEggs,[1,2,3,4])
console.log(goodEggs)

function except(allEggs, badEggs) {
    let goodEggs = []
    for(let egg of allEggs)
    if (!badEggs.includes(egg))
    goodEggs.push(egg)
    return  goodEggs
}

// GET THE MAX OF AN ARRAY

const num = [1,2,4,2,5,6,3,5,2,10]

let max = findMax ([1,2,3,4,9,8,100])

let max = num[0]
 console.log(max)

function findMax(num){
   for(let i = 1; i < num.length; num++)
   if (max < num[i])
   max = num[i]
   return max

}

// COUNT OCCURANCE 

const numbers = [ 3,2,4,4,5,1,2,2,2,2]
count = countOccurance(numbers,4)
console.log(count)
function countOccurance(numbers,searchNum){
    let count = 0
    for(let el of numbers)
    if (el === searchNum )
    count++
    return count
}


//  ARRAY IN ARRAY SUM

function sum(...nums){
  if (nums.length === 1 && Array.isArray(nums[0]))
    nums = [...nums[0]]
  return nums.reduce((a,b) => a+b)
}
console.log(sum([2,3,1]))

// GETTERS AND SETTERS

const person = {
    firstName : 'Jude',
    lastName : 'Okagu',
    get fullName(){
        return `${person.firstName} ${person.lastName}` 
    },
     set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Emmy Cole'
console.log(person)


// this key word
// A method is a function that is called on an object. 
// in an object this refers to the object while in a function this refers to the window function

// HOUSTING WE CALL A FUNCTION ONLY AFRER THE EXPRESSION DECLARATION CAN BE CALLED ANYTIME

// FUNTION DECLATION

// REST OPERATOR

function sum (...juud){
   return juud.reduce((a,b) => a+b);
}
sum(2,3,1,1,3,4);

// WE CANT PASS AN ARGUMENT AFTER THE ...REST OPERATOR

// DEDUCTING DISCOUNT SHOPPING CART REST OPERATPR

function sum (disc,...lolo){
 let total = lolo.reduce((a,b) => a+b);
 return total * (1 - disc); 
}
console.log(sum(0.2,3,2,4,5,6));
