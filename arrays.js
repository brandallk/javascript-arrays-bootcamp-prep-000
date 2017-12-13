var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"  
];

function addElementToBeginningOfArray(array, elt) {
  return [elt, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, elt) {
  return array.unshift(elt);
}

destructivelyAddElementToBeginningOfArray(chocolateBars, 'foo');