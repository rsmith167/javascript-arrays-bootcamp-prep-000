var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(existingArray, newElement){
   var newArray = [newElement, ...existingArray]
   return newArray
}
function destructivelyAddElementToBeginningOfArray(existingArray, newElement){
   existingArray.unshift(newElement)
}
function addElementToEndOfArray(existingArray, newElement){
  var new1Array = [...existingArray, newElement]
  return new1Array
}
function destructivelyAddElementToEndOfArray(existingArray, newElement){
  existingArray.push(newElement)
}