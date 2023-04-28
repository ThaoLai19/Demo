function drawMap() {
    // Double forloop to draw
    //for (let x = 0; x < array2d[0].length; x++) {
       // for (let y = 0; y < array2d.length; y++) {
    for (let x = array2d[0].length - 1; x >= 0; x--) {
        for (let y = array2d.length - 1; y >= 0; y--) {
            if (array2d[x][y] >= THRESHOLD) {
                // Draw the rectangle
                cvs.fillStyle = 'rgba(255, 255, 255)';
                cvs.fillRect(x, y, 1, 1);
                //cvs.fillRect(y, x, 1, 1);
                // Phai rotate cai distance field de no ko anh huong toi clicking particle
            }
        }
    }
}
