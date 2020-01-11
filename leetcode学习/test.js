// function mergeSort(arr) {
//   if (arr.length < 2) return arr

//   let middle = Math.floor(arr.length / 2)
//   let left = arr.slice(0, middle)
//   let right = arr.slice(middle)

//   return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right) {
//   let result = []

//   while (left.length > 0 && right.length > 0) {
//     if (left[0] < right[0]) {
//       result.push(left.shift())
//     } else {
//       result.push(right.shift())
//     }
//   }

//   return result.concat(left).concat(right)
// }

// const num = [6, 10, 1, 4, 19, 8, 3, 7, 16]
// console.log("num ", num)

// const result = mergeSort(num)
// console.log("result ", result)


function mergeSort(arr){
  if (arr.length < 2) return arr
  
  let step = 1 
  let left, right
  while (step < arr.length) {
    left = 0
    right = step

    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step)
      left = right + step
      right = left + step
    }

    if (right < arr.length) {
      mergeArrays(arr, left, left + step, right, arr.length)
    }

    step *= 2
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight){

  let rightArr = new Array(stopRight - startRight + 1)
  let leftArr = new Array(stopLeft - startLeft + 1)
  
  k = startRight

  for (let i=0; i < (rightArr.length - 1); ++i) {
    rightArr[i] = arr[k]
    ++k
  }
   
  k = startLeft
  for (let i=0; i < (leftArr.length - 1); ++i) {
    leftArr[i] = arr[k]
    ++k
  }
  
  rightArr[rightArr.length - 1] = Infinity
  leftArr[leftArr.length - 1] = Infinity
  let m = 0
  let n = 0
  
  for (let k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m]
      m++
    }

    else{
      arr[k] = rightArr[n]
      n++
    }
  }
}

const num = [6, 10, 1, 4, 19, 8, 3, 7, 16]
console.log("num ", num)

const result = mergeSort(num)
console.log("result ", result)