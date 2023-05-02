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
    var n = 10;
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[0].length; y++) {
            if (array2d[x][y] >= n) {  
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
