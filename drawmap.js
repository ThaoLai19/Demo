function drawMap() {
    // Double forloop to draw
    for (let y = array2d.length[0] - 1; y >=0 ; y--) {
        for (let x = 0; x < array2d.length; x++) {
            if (array2d[x][y] >= THRESHOLD) {
                // Draw the rectangle
                cvs.fillStyle = 'rgba(255, 255, 255)';
                cvs.fillRect(x, y, 1, 1);
               // cvs.fillRect(y, x, 1, 1);
                // Phai rotate cai distance field de no ko anh huong toi clicking particle
            }
        }
    }
}
