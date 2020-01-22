var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(existingArray, newElement){
  return existingArray.unshift(newElement)
}
function destructivelyAddElementToBeginningOfArray(existingArray, newElement){
   existingArray = [newElement, ...existingArray]
   return existingArray
}