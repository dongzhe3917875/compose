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