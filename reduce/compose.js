// const compose = function(...args) {
//   return args.reduce(function(f1, f2) {
//     return function(...arg) {
//       return f2.call(null, f1.apply(null, arg))
//     }
//   })
// }

const _pipe = (f, g) => (...arg) => g.call(null, f.apply(null, arg))
const compose = (...args) => args.reverse().reduce(_pipe, args.shift())
module.exports = compose

// steps = [step4, step3, step2, init]
//
// f1 = (...arg) => step2.call(null, init.apply(null, arg))
// f2 = (...arg) => step3.call(null, f1.apply(null, arg))
// ...