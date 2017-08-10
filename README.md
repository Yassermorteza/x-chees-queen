# x-chees-queen

Chess Queen Exercise

Ths exercise is very much inspired from Queen Attack in JavaScript

_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ W _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ B _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _

Goal

Resources

Google ;)
Unicode Chess Symbols and unicode symbol reference in general
Steps

1 - Create a Checkboard

Remove the margin of body in CSS

Center the table and make it as big as possible (but square and... in CSS)

Create a .black CSS class with a black background color

Create a function called cellClicked which has 3 arguments (rowNum, columnNum and event).

Create a function called renderChessboard which takes the table element as argument.

The function adds 8 rows (tr) of 8 cells (td) (columns), you must use DOM for that because...
Each cell has a click event listener which calls the cellClicked
The function must return the matrix filled with the corresponding (td) elements (and you should make a variable of its result ;) ).
Hint: you can reuse the logic of the matrix exercise code for that.

2 - Hightlighing a Row

Create a CSS rule which applies to the .highlight td and .highlight selectors and give it a blue inset box-shadow (the other parameters are up to you).
Create a function called highlightRow which takes a rowNum argument, add a call to the highlightRow function you just created in your cellClicked
Make so that the highlightRow adds the highlight class to the row element.
Hint: have a look at the parentNode and classList properties of a DOM element to add a class to the row.

3 - Hightlighing a Column

Create a function called highlightColumn which takes a columnNum argument and will add the highlight class to the cell element.
Add a call to highlightColumn to your cellClicked function (if it's not already done ;) )
4 - Remove Highlighting

Create a function called removeHighlight which removes all the .highlight classes in the chessboard table.
Add a call to removeHighlight at the beginning of the cellClicked function.
Hint: you could use the .querySelectorAll() method of DOM elements.

5 - Hightlighing Diagonals

Create a function called highlightDiagonals which takes a rowNum and a columnNum argument and will add the highlight class to the cell element placed on the diagonals of the rowNum and columnNum.
Add a call to highlightDiagonals to your cellClicked function...
Reflection about diagonals in a matrix
