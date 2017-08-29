var arrayMatrixLibrary = require('array-matrix');
var createMatrix = arrayMatrixLibrary.createMatrix;
var matrix = createMatrix(8, 8);
var tableDiv = document.querySelector('.chessboard__table');
// var figure = document.querySelector('.chessboard__figures');
var bolean = true;

var tilted = document.querySelector('input');
tilted.addEventListener('change', function() {
    if (tilted.checked) {
        tableDiv.classList.add('chessboard--tilted');
    } else {
        tableDiv.classList.remove('chessboard--tilted');
    }
});

matrix.forEach(function(row, index1) {

    var rowDiv = document.createElement('div');
    rowDiv.classList.add('chessboard__row');
    row.forEach(function(col, index2) {
        var cellDiv = document.createElement('div');
        cellDiv.classList.add('chessboard__cell');

        cellDiv.addEventListener('click', function() {
            cellClicked(index1, index2);

            // figure.style.left = ((tableDiv.clientWidth / 8) * index2) + 'px';
            // figure.style.top = ((tableDiv.clientWidth / 8) * index1) + 'px';
        });

        if (bolean) {
            cellDiv.classList.add('chessboard__cell--white');
        } else {
            cellDiv.classList.add('chessboard__cell--black');
        }

        bolean = !bolean;
        rowDiv.appendChild(cellDiv);
    });
    bolean = !bolean;
    tableDiv.appendChild(rowDiv);
});


function cellClicked(rowNum, columnNum) {

    removeHighlightAndSymbol();
    highlightRow(rowNum);
    hightlightColumnAddSymbol(rowNum, columnNum);
    highlightDiagonals(rowNum, columnNum);
}


var tr = document.getElementsByClassName('chessboard__row');

function highlightRow(rowNum) {

    tdNode = tr[rowNum].childNodes;

    for (var i = 0; i < 8; i++) {
        tdNode[i].classList.add('chessboard__cell--highlight');
    }
}

function hightlightColumnAddSymbol(rowNum, columnNum) {

    tdNode = tr[rowNum].childNodes;
    tdNode[columnNum].classList.add('chessboard__cell--changecolor');

    for (var i = 0; i < 8; i++) {
        tdNode = tr[i].childNodes;
        for (var j = 0; j < 8; j++) {
            tdNode[columnNum].classList.add('chessboard__cell--highlight');
        }
    }

    // var addSymbol = tr[rowNum].getElementsByTagName('div');
    // var tdBlack = addSymbol[columnNum].classList.contains('chessboard__cell--black');
    // if (tdBlack) {
    //     figure.style.color = '#fff';
    // } else {
    //     figure.style.color = '#000';
    // }
}


function removeHighlightAndSymbol() {

    var highlightClass = document.querySelectorAll('.chessboard__cell');
    highlightClass.forEach(function(el, index) {
        var highlight = highlightClass[index].getAttribute('class');
        if (highlight) {
            highlightClass[index].classList.remove('chessboard__cell--highlight', 'chessboard__cell--changecolor');
            highlightClass[index].textContent = "";
        }
    });
}

function highlightDiagonals(rowNum, columnNum) {

    for (var i = 0; i < 8; i++) {
        var rowLimit = rowNum + i;
        if (rowLimit <= 7) {
            var tdNodeDown = tr[rowNum + i].childNodes;
            if (tdNodeDown[columnNum + i]) {
                tdNodeDown[columnNum + i].classList.add('chessboard__cell--highlight');
            }
            if (tdNodeDown[columnNum - i]) {
                tdNodeDown[columnNum - i].classList.add('chessboard__cell--highlight');
            }

        } else {
            for (i = 0; i < 8; i++) {
                rowLimit = rowNum - i;
                if (rowLimit >= 0) {
                    var tdNodeUp = tr[rowNum - i].childNodes;
                    if (tdNodeUp[columnNum - i]) {
                        tdNodeUp[columnNum - i].classList.add('chessboard__cell--highlight');
                    }
                    if (tdNodeUp[columnNum + i]) {
                        tdNodeUp[columnNum + i].classList.add('chessboard__cell--highlight');
                    }
                }
            }
        }
    }
}