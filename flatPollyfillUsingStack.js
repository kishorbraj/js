let a = [1, 2, 3, [5, 6, [7, 8]],
  [9, 10]
]

function flatArray(a) {

  let stack = [...a]

  let output = []

  while (stack.length > 0) {

    let item = stack.pop();
    console.log(item)
    if (Array.isArray(item)) {
      stack.push(...item)
    } else {
      output.push(item)
    }

  }
  return output;


}


console.log(flatArray(a.reverse()))
