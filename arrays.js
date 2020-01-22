var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(existingArray, newElement){
   var newArray = [newElement, ...existingArray]
   return newArray
}
function destructivelyAddElementToBeginningOfArray(existingArray, newElement){
   existingArray.unshift(newElement)
   return existingArray
}
function addElementToEndOfArray(existingArray, newElement){
  var new1Array = [...existingArray, newElement]
  return new1Array
}
function destructivelyAddElementToEndOfArray(existingArray, newElement){
   existingArray.push(newElement)
   return existingArray
}
function accessElementInArray(existingArray, index){
 return existingArray[index] 
}
function destructivelyRemoveElementFromBeginningOfArray(existingArray){
  return existingArray.shift()
}
function removeElementFromBeginningOfArrya