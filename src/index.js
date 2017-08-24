var arrayMatrixLibrary = require('array-matrix');
var createMatrix = arrayMatrixLibrary.createMatrix;
var matrix = createMatrix(8,8);
var table = document.querySelector('table');
var bolean= true;
var figure =document.querySelector('.figure');

matrix.forEach(function(row, index1){
  var tr = document.createElement('tr');
  row.forEach(function(col, index2){
    var td = document.createElement('td');

    function event(x,y){
      td.addEventListener('click', function(){
        cellClicked(x,y);
        figure.style.left = ((table.clientWidth / 8) * y) + 'px';
        figure.style.top = ((table.clientWidth / 8) * x) + 'px';
      });
    }
    event(index1,index2);

    if(bolean){
      td.classList.add('white');
    }else{
      td.classList.add('black');
    }

    bolean=!bolean;
    tr.appendChild(td);
  });
  bolean=!bolean;
  table.appendChild(tr);
});

// function renderChessboard(table){
//      // "use strict";
//      var i,
//          j;
//      for( i=0; i < 8; i++){
//         var tr = document.createElement('tr');

//         for( j=0; j< 8; j++){
//             var td = document.createElement('td');

//             function event(x, y){
//               td.addEventListener('click', function(){
//                  cellClicked(x,y);
//               })
//             }
//               event(i,j);

//               if(i % 2 !== 0 && j % 2 === 0){
//                   td.setAttribute('class', 'black');
//               }else if(i % 2 ===0 && j % 2 !== 0){
//                   td.setAttribute('class', 'black');
//               }
//             tr.appendChild(td);
//         }
//           table.appendChild(tr);
//       }
// }

// renderChessboard(table);

function cellClicked(rowNum, columnNum){

     removeHighlightAndSymbol();
     highlightRow(rowNum);
     hightlightColumnAddSymbol(rowNum,columnNum);
     highlightDiagonals(rowNum, columnNum);
}


var tr = document.getElementsByTagName('tr');

function highlightRow(rowNum){

    tdNode = tr[rowNum].childNodes;

    for(var i=0; i < 8; i++){
     tdNode[i].classList.add('highlight');
    }
}

function hightlightColumnAddSymbol(rowNum,columnNum){

    tdNode =tr[rowNum].childNodes;

    for(var i=0; i < 8; i++){
      tdNode = tr[i].childNodes;
      for(var j=0; j <8; j++){
         tdNode[columnNum].classList.add('highlight');
      }
    }

    var addSymbol = tr[rowNum].getElementsByTagName('td');
    var tdBlack = addSymbol[columnNum].classList.contains('black');

    // addSymbol[columnNum].innerHTML='<p>&#9813;</p>';
    // if(tdBlack){
    //   addSymbol[columnNum].innerHTML='<p class="white">&#9813;</p>';
    // }

     if(tdBlack){
      figure.style.color = '#fff';
     }else{
      figure.style.color = '#000';
     }
}


function removeHighlightAndSymbol(){

    var highlightClass = document.querySelectorAll('td');

      highlightClass.forEach(function (el, index){

          var highlight = highlightClass[index].getAttribute('class');

          if(highlight){
             highlightClass[index].classList.remove('highlight');
             highlightClass[index].textContent = "";
          }
      });
}

function highlightDiagonals(rowNum, columnNum){

     for(var i=0; i < 8 ; i++){
        var rowLimit = rowNum + i;
        if(rowLimit <= 7){
             var tdNodeDown = tr[rowNum +i].childNodes;
            if(tdNodeDown[columnNum + i]){
           tdNodeDown[columnNum + i].classList.add('highlight');
            }
            if (tdNodeDown[columnNum - i]){
           tdNodeDown[columnNum - i].classList.add('highlight');
            }

        }else {
               for(i=0; i <8; i++){
                    rowLimit = rowNum -i;
                    if(rowLimit >= 0 ){
                       var tdNodeUp = tr[rowNum - i].childNodes;
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



// function tdHandlers() {
//             var tdNode = table.getElementsByTagName('td');
//             for(var i=0; i < tdNode.length; i++){
//             tdNode[i].addEventListener("click" ,function(event) {
//                                         var row = event.target.parentElement.rowIndex;
//                                         var col = event.target.cellIndex;
//                                         console.log(row + ' , ' + col);
//                                  })}}

// window.onload = tdHandlers();


// for(let i = 1; i < 6; i++) {
//   document.getElementById('my-element' + i)
//     .addEventListener('click', function() { alert(i) }) //  or ==> item.onclick = function(ev)
// }


// function addLinks () {
//     for (var i=0, link; i<5; i++) {
//         link = document.createElement("a");
//         link.innerHTML = "Link " + i;
//         link.onclick = function (num) {
//           return function () {
//           alert(num);
//           };
//         }(i);
//       document.body.appendChild(link);
//     }
// }
// window.onload = addLinks;

//Or use this method
// function addLinks () {

//     for (var onclick = function(num){
//       return function(){alert(num)}},
//          i=0, link; i<5; i++){
//         link = document.createElement("a");
//         link.innerHTML = "Link " + i;
//         link.onclick = onclick(i);
//         document.body.appendChild(link);
//     }
// };

// onload = addLinks;


// tr:nth-child(odd) {background: #150095} /* selects every odd row */
// tr:nth-child(even) {background: #a293ff} /* selects every even row */
// li:nth-child(2n+0) {background:grey}  selects every even row of a list
// li:nth-child(even) {background:grey} /* same as above */
// li:nth-child(2n+1) {background:white} /* selects every odd row of a list */
// li:nth-child(odd) {background:white} /* same as above */