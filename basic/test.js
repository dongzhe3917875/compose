let compose = require('./compose.js')


let init = (...args) => args.reduce((ele1, ele2) => ele1 + ele2, 0)
// var step1 = (...args) => 1
let step2 = (val) => val + 2
let step3 = (val) => val + 3
let step4 = (val) => val + 4

steps = [step4, step3, step2, init]

let composeFunc = compose(...steps)
// let composeFunc = compose(step4, step3, step2, init)

console.log(composeFunc(1, 2, 3))
// 15

// for 循环
let jobs = [[1, 2, 3], [4, 5], [6, 7]]
jobs.forEach(ele => console.log(composeFunc(...ele)))
// 15 18 22