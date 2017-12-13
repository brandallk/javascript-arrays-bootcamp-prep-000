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
  array = array.unshift(elt);
  return array;
}

console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, 'foo'));