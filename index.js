// Code your solution here
const findMatching = (drivers, searchString) => drivers.filter(driver => driver.toLowerCase() === searchString.toLowerCase());

const fuzzyMatch = (drivers, startingLetters) => {
  const regexp = new RegExp(`^${startingLetters.toLowerCase()}`);
  return drivers.filter(driver => regexp.test(driver.toLowerCase()));
};

const matchName = (drivers, searchString) => drivers.filter(driver => driver.name === searchString)
;