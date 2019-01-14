


const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function rotate90Degs(matrix) {
   matrix = matrix.reverse()
   console.log(matrix)
   for(var i in matrix)
    for(var j =0; j<i; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    console.log(matrix)
      return matrix
}
  

rotate90Degs(matrix);

var rotate = function(matrix) {
    debugger;
    for (var row = 0; row <= matrix.length-1; row++) {
    var tracker = matrix.length-1;
    
      for (var j = matrix.length-1; j >= 0; j--) {
        var current = matrix[row].pop();
        matrix[tracker].unshift(current);
        tracker--;
      }
    }
    return matrix;
  };

  console.log(rotate(matrix));