Function.prototype.before = function(fn) {
  const self = this
  return function(...args) {
    let result = fn.apply(null, args)
    return self.call(null, result)
  }
}

Function.prototype.after = function(fn) {
  const self = this
  return function(...args) {
    let result = self.apply(null, args)
    return fn.call(null, result)
  }
}

// let step1 = (...args) => args.reduce((ele1, ele2) => ele1 + ele2, 0)
// // var step1 = (...args) => 1
// let step2 = (val) => val + 2
// let step3 = (val) => val + 3
// let step4 = (val) => val + 4
// console.log(step2.before(step1).after(step3).after(step4)(1,2,3))

// fn3.after(step4)
// fn3 = fn2.after(step3)
// fn2 = fn1.before(step1)
// fn1 = step2
// step1 -> step2 -> step3 -> step4

const compose = function(...args) {
  let before = args.pop()
  let start = args.pop()
  if (args.length) {
    return args.reduce(function(f1, f2) {
      return f1.after(f2)
    }, start.before(before))
  }
  return start.before(before)
}

module.exports = compose