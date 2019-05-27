// Code your solution here

const findMatching = (drivers, name) => drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())

const fuzzyMatch = (drivers, initial) => drivers.filter(driver => driver.slice(0,2) === initial)

const matchName = (drivers, searchString) => drivers.filter(driver => driver.name === searchString)