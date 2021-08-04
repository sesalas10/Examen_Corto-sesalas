
function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  
  function shuffle() {
    
      document.getElementById('img-o').style.display = 'none';
    
   
 
  for (var row=1;row<=4;row++) { 
     for (var column=1;column<=4;column++) { 
    
      var row2=Math.floor(Math.random()*4 + 1); 
      var column2=Math.floor(Math.random()*4 + 1); 
       
      swapTiles("cell"+row+column,"cell"+row2+column2); 
    } 
  } 
  }

  function esconder(){
    
    document.getElementById('img-o').style.display = 'inline';

    let uno = document.getElementById('button2js');
    if (uno.innerHTML == 'Seguir jugando') 
        uno.innerHTML = 'Mostrar original';
    else uno.innerHTML = 'Seguir jugando'; 

    if(uno.textContent=="Mostrar original" ){
      document.getElementById('img-o').style.display = 'none';
    }

  }
  
  function clickTile(row,column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if (tile!="box16") { 
    
         if (column<4) {
           if ( document.getElementById("cell"+row+(column+1)).className=="box16") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
       
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="box16") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
       
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="box16") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
        
         if (row<4) {
           if ( document.getElementById("cell"+(row+1)+column).className=="box16") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }
    
  }