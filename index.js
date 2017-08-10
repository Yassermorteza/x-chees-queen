var table = document.querySelector('table');

function renderChessboard(table){

     for(var j=0; j < 8; j++){

    var tr = document.createElement('tr');

    for(var i=0; i< 8; i++){
        var td = document.createElement('td');

        function event(x, y){

          td.addEventListener('click', function(){
             cellClicked(x,y);
          })}
          event(j,i);

      if(i % 2 !== 0 && j % 2 === 0){
      td.setAttribute('class', 'black');
      }else if (i % 2 ===0 && j % 2 !== 0){
              td.setAttribute('class', 'black');
      }
      tr.appendChild(td);
   }
     table.appendChild(tr);
   }
}

renderChessboard(table);


function cellClicked(rowNum, columnNum){

     removeHighlight();
     highlightRow(rowNum);
     hightlightColumn(rowNum,columnNum);
     highlightDiagonals(rowNum, columnNum);

}


var tr = document.getElementsByTagName('tr');

function highlightRow(rowNum){

  tdNode = tr[rowNum].childNodes;

  for(var i=0; i < 8; i++){
   tdNode[i].classList.add('highlight');
  }

}

function hightlightColumn(rowNum,columnNum){

    // tdNode = tr[rowNum].childNodes;
    // tdNode[columnNum].classList.add('symbol');
    for(var i=0; i < 8; i++){
      tdNode = tr[i].childNodes;
      for(var j=0; j <8; j++){
         tdNode[columnNum].classList.add('highlight');
      }
    }
}


function removeHighlight(){

    var highlightClass = document.querySelectorAll('td');

        highlightClass.forEach(function (el, index){

            var attr = highlightClass[index].getAttribute('class');

            if(attr){
               highlightClass[index].classList.remove('highlight');
            }
        })

}

function highlightDiagonals(rowNum, columnNum){

     var tdNodeDown = tr[rowNum].childNodes;
     console.info(tdNodeDown);

     for(var i=0; i < tdNodeDown.length ; i++){

            var rowLimit = rowNum + i;
        if(rowLimit <= 7){

             var tdNodeDown = tr[rowNum +i].childNodes;

            if(tdNodeDown[columnNum + i]){
           tdNodeDown[columnNum + i].classList.add('highlight');
            }
            if (tdNodeDown[columnNum - i]){
           tdNodeDown[columnNum - i].classList.add('highlight');
            }

       }else{

       for(var i=0; i <8; i++){

           var tdNodeUp = tr[rowNum - i].childNodes;


          if(tdNodeUp){

               if(tdNodeUp[columnNum - i]){
                tdNodeUp[columnNum - i].classList.add('highlight');
               }
               if(tdNodeUp[columnNum + i]){
                  tdNodeUp[columnNum + i].classList.add('highlight');
               }
          }

       }
     }
   }
}
