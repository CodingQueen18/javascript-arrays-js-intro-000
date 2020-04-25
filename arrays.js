var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element) {
var newArray = [element, ...array]
  return newArray;

}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array;
}

function addElementToEndOfArray (array, element) {
  var newArray = [...array, element]
  return newArray;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array;
}

function accessElementInArray (array, index) {
  return array[index]
}

//Removes the first element in the array. Your function should then return the entire array, and it should mutate the array.
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// Removes the first element in the array. This function should return the entire array in the same line, and it should not mutate the original array.
function removeElementFromBeginningOfArray(array) {
  //var newArray = array.splice(1)
  //return newArray;
  return array.slice(1)

}


//Removes the last element of an array. Your function should return the entire array, and it should mutate the array.
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

