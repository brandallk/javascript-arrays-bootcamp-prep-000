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
  array.unshift(elt);
  return array;
}

function addElementToEndOfArray(array, elt) {
  return [elt, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, elt) {
  array.unshift(elt);
  return array;
}