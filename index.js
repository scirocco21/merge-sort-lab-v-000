function findMinAndRemoveSorted(sortedArray){
  return sortedArray.shift()
}


function merge(firstHalf, secondHalf){
  let sorted = []
  let currentMin;
  while(firstHalf.length != 0 && secondHalf.length != 0){
    let currentMin = findMinAndRemoveSorted(firstHalf, secondHalf)
    sorted.push(currentMin)
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}


function mergeSort(array){
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if(array.length < 2){
    return array
    } else {
      merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
  }
