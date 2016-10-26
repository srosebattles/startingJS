/**
For a given 2D vector described by cartesian coordinates of its initial point
and terminal point in the following format: [[x1, y1], [x2, y2]], your function
must return this vector's length presented as a float.

According to Google-sensei, a vector is the square root of (x1*x2 + y1*y2)

K, so you do square roots by doin' Math.sqrt(). Got it.

Wait, that way of writing the formula only works for positive non-zero numbers. Darnit.

Math.abs(x1)+math.abs(x2), if I square it, would get me the value of x I need.

Math.pow() would be how I can square something
**/

console.log("testing")


function vectorLength([[x1, y1], [x2, y2]]){

  var mew=Math.abs(x1 + x2)
  var mewtwo=Math.abs(y1 + y2)

  var mouse=Math.pow(mew,2)
  var rat=Math.pow(mewtwo,2)

  return Math.sqrt(rat + mouse)

}

console.assert(vectorLength([[0, 1],[0, 0]]) === 1)
console.assert(vectorLength([[0, 3],[4, 0]]) === 5)
console.assert(vectorLength([[1, -1],[1, -1]]) === 0)
