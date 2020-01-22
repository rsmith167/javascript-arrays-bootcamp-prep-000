var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(existingArray, newElement){
   var newArray = [newElement, ...existingArray]
   return newArray
}
function destructivelyAddElementToBeginningOfArray(existingArray, newElement){
   return existingArray.unshift(newElement)
}
