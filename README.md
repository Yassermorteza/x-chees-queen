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


The Infamous Loop Problem

How many times have you created some sort of loop where you wanted to assign the value of i in some way, e.g. to an element, and found out it just returned the last value i had?

Incorrect Reference

Let’s take a look at this faulty code, which creates 5 a elements, adds the value of i as a text to each element and an onclick which is expected to alert the value of i for that link, i.e. the same value as in the a element’s text. It then appends them to your document body:

function addLinks () {
for (var i=0, link; i<5; i++) {
link = document.createElement("a");
link.innerHTML = "Link " + i;
link.onclick = function () {
alert(i);
};
document.body.appendChild(link);
}
}
window.onload = addLinks;

Each a element gets the correct text, i.e. “Link 0”, “Link 1” and so on. But whichever link you click, it alerts the number “5”. Oh my God, why? The reason for this is that the variable i get its value increased with 1 for each iteration of the loop, and since the onclick event isn’t being executed, just applied to the a element, it adds up.

Therefore, the loop continues until i is 5, which is the last value of i before the function addLinks exits. Then, whenever the onclick event is actually being triggered, it takes the last value of i.

Working Reference

What you want to do instead is create a closure, so that when you apply the value of i to the onclick event of the a element, it gets the exact value of i at just that moment in time. Like this:

function addLinks () {
for (var i=0, link; i<5; i++) {
link = document.createElement("a");
link.innerHTML = "Link " + i;
link.onclick = function (num) {
return function () {
alert(num);
};
}(i);
document.body.appendChild(link);
}
}
window.onload = addLinks;

With this code, if you click the first a element it will alert “0”, the second “1” etc; just what you probably expected with the first code I showed you to do. The solution here is that the inner function of what’s applied to the onclick event create a closure where it references the parameter num, i.e. what the i variable is at just that time.

That function then closes with that value safely tucked away, and can then return its corresponding number when the onclick event is being called.


//or this method
function addLinks () {

for (var onclick = function(num){return function(){alert(num)}}, i=0, link; i<5; i++) {
link = document.createElement("a");
link.innerHTML = "Link " + i;
link.onclick = onclick(i);
document.body.appendChild(link);
}
};

onload = addLinks;

//This code below will return always number 6;
for(var i = 1; i < 6; i++) {
  document.getElementById('my-element' + i)
    .addEventListener('click', function() { alert(i) })
}

//Using let instead var can solve the problem,

for(let i = 1; i < 6; i++) {
  document.getElementById('my-element' + i)
    .addEventListener('click', function() { alert(i) })
}

