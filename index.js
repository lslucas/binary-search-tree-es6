/**
* Simple Javascript Binary Search Tree
**/
class BinarySearchTree {

  constructor(haystack, needle) {
    let sortedHaystack = haystack.sort((a, b) => a-b)

    this.result = false

    this.recursiveSearch(sortedHaystack, needle, 0, haystack.length-1)
  }

  recursiveSearch(array, needle, left, right) {
    if (left > right) {
      this.result = -1
      return -1
    }

    var middle = Math.floor((left + right)/2)

    while (!this.result) {
      if (array[middle] === needle) {
        this.result = middle
      } else if (array[middle] > needle) {
        middle--
      } else {
        middle++
      }
    }
  }

}

/**
 * Testing the code
 */

// max number
let max = 19999999
// big array of test
let array = [...Array(max).keys()]
// random number
let randomNumber = Math.floor((Math.random() * max) + 1)

// show the result
console.log('the random number is ' + randomNumber)
console.log('the size of the array is ' + (array.length-1))
console.log(new BinarySearchTree(array, randomNumber).result)