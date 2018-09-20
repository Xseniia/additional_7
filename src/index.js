module.exports = function solveSudoku(matrix) {
  for(let a = 0; a < 9; a++) {
  	for(let b = 0; b < 9; b++) {
  		if(matrix[a][b] == 0) {
  			for(let c = 1; c <= 9; c++) {
  				if(checkXY(matrix, a, b, c) && checkCube(matrix, a, b, c)) {
  					matrix[a][b] = c;
  					if(solveSudoku(matrix)) {
  						return matrix;
  					}
  					matrix[a][b] = 0;
  				}
  			}
  			return false;
  		}
  	}
  }
  return true;
}

function checkXY(matrix, a, b, c) {
	for(let x = 0; x < 9; x++) {
		if(a != x && matrix[x][b] == c || b != x && matrix[a][x] == c) {
			return false;
		}
	}
	return true;
}

function checkCube(matrix, a, b, c) {
	for(let p = 0; p < 3; p++) {
		for(let q = 0; q < 3; q++) {
			if(a != p && b != q && matrix[Math.floor(a / 3) * 3 + p][Math.floor(b / 3) * 3 + q] == c) {
				return false;
			}
		}
	}
	return true;
}