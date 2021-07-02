const los = require('lodash')

const li = [1,[2,[3,[4]]]]

console.log(los.flattenDeep(li));