

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