// Code your solution here
function findMatching (drivers, string) {
    let result = drivers.filter(d => 
       d.toLowerCase() == string.toLowerCase())
   return result
}

let fuzzyMatch = (drivers, string) =>
   drivers.filter(driver => driver.startsWith(string))
;

let matchName = (drivers, string) => 
    drivers.filter(driver => driver.name === string)
