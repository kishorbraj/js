const arr1 = [1, 2, [3, 4]]
console.log(arr1.flat());


const arr2 = [1, 2, [3, 4, [5, 6]]]
console.log(arr2.flat())

const arr3 = [1, 2, [3, 4, [5, 6]]]
console.log(arr3.flat(2))

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log(arr4.flat(Infinity))