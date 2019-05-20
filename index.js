// Code your solution here
function findMatching(array, name) {
    name = name.toLowerCase()
    return array.filter(driver => driver.toLowerCase() === name)

}

function fuzzyMatch(array, name) {
    return array.filter(driver => driver.slice(0,2) === name )
}

function matchName(array, name) {
    return array.filter(driver => driver.name === name)
}