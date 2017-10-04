function* iterateSteps(steps) {
  let n
  for (let i = 0; i < steps.length; i++) {
    if (n) {
      n = yield steps[i].call(null, n)
    } else {
      n = yield
    }
  }
}

const compose = function(...steps) {
  let g = iterateSteps(steps)

  // while(val) {
  //   val = g.next(val).value
  //   // 在这里可以拿到想要的值
  //   console.log(val)
  // }
  return function(...args) {
    let val = steps.pop().apply(null, args)
    // 这里是第一个值
    console.log(val)
    // 因为无法传参数 所以无所谓执行 就是空耗一个yield
    g.next()
    return steps.reverse.reduce((val, val1) => g.next(val).value, val)
  }
  // for (let i = 0; i < stepNew.length; i++) {
  //   val = g.next(val).value
  //   // 在这里可以拿到想要的值
  //   console.log(val)
  // }
}

module.exports = compose