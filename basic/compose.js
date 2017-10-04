const compose = function(...args) {
  let length = args.length
  let count = length - 1
  let result
  return function f1 (...arg1) {
    result = args[count].apply(this, arg1)
    if (count <= 0) {
      count = length - 1
      return result
    }
    count--
    return f1.call(null, result)
  }
}

module.exports = compose