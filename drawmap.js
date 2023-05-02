/*function drawMap() {
    // Double forloop to draw
    for (let x = array2d.length - 1; x >= 0 ; x--) {
        for (let y = 0; y < array2d[0].length; y++) {
            if (array2d[x][y] >= THRESHOLD) {
                // Draw the rectangle
                cvs.fillStyle = 'rgba(255, 255, 255)';
                //cvs.fillRect(x, y, 1, 1);
                cvs.fillRect(y, x, 1, 1);
                // Phai rotate cai distance field de no ko anh huong toi clicking particle
            }
        }
    }
}*/

function drawMap() {  
    // Double forloop to draw
    const rows = array1[0].length;
      const cols = array1.length;
      array2d = new Array(array1[0].length);
    
      for (let i = 0; i < array1[0].length; i++)
      {
        array2d[i] = new Array(array1.length);
        for (let j = 0; j < array1.length; j++)
        {
          array2d[i][j] = array1[j][i];  
        }
      }
    
    console.log(array1);
    console.log(array2d);
    
    for (let x = 0; x < array2d.length; x++) {
        for (let y = 0; y < array2d[0].length; y++) {
            if (array2d[x][y] >= THRESHOLD) {  
                cvs.fillStyle = 'rgba(255, 255, 255)';
                cvs.fillRect(x, y, 1, 1);
            }
        }
    }
}

/*function drawMap() {
    // Double forloop to draw
    for (let x = 0; x < array2d.length ; x++) {
        for (let y = 0; y < array2d[0].length; y++) {
            if (array2d[x][y] >= THRESHOLD) {
                // Draw the rectangle
                cvs.fillStyle = 'rgba(255, 255, 255)';
                cvs.fillRect(x, y, 1, 1);
                //cvs.fillRect(y, x, 1, 1);
            }
        }
    }
}*/
