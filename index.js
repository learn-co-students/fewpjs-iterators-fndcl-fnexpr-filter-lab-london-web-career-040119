// Code your solution here
function findMatching (arr, str) {
    let result = arr.filter(d => 
       d.toLowerCase() == str.toLowerCase())
   return result
}

 // Using ES6
let fuzzyMatch = (arr, str) =>
   arr.filter(driver => driver.startsWith(str))
;

let matchName = (drivers, searchString) => 
    drivers.filter(driver => driver.name === searchString)
; 