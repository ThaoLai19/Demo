function getArray() {  
    // Double forloop to draw
    //var n = 10;
    const rows = array1[0].length;
      const cols = array1.length;
      array2d = new Array(rows);
    
      for (let i = 0; i < rows; i++)
      {
        array2d[i] = new Array(cols);
        for (let j = 0; j < cols; j++)
        {
          array2d[i][j] = array1[j][i];  
        }
      }
}
