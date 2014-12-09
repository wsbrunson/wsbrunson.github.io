var habitSquare = function(completed) {
  this.completed = completed;

  this.colorSquare = function() {
    var squareHTML,
        greenSquare = '<div class="square green"></div>',
        redSquare =  '<div class="square red"></div>';
        
    squareHTML = this.completed ? greenSquare : redSquare;
    return squareHTML;
  };

  this.htmlClass = this.colorSquare();

};

var newSquare = new habitSquare(true);
console.log(newSquare);
console.log(newSquare.htmlClass);

console.log(new habitSquare(true));

var newHabitUser = [];
newHabitUser.push(new habitSquare(true));
newHabitUser.push(new habitSquare(true));
newHabitUser.push(new habitSquare(false));
newHabitUser.push(new habitSquare(true));
newHabitUser.push(new habitSquare(true));
newHabitUser.push(new habitSquare(true));
newHabitUser.push(new habitSquare(false));
newHabitUser.push(new habitSquare(true));

console.log(newHabitUser.length);

var addSquare = function(squares) {
  var numberOfSquares = 365;
  var squareObjects = squares.length;
  var graySquares = numberOfSquares - squareObjects;
  console.log(graySquares);

  for(var i = 0; i < squareObjects; i++) {
    $('.main').append(squares[i].htmlClass);
    console.log(squares[i].htmlClass);
  }

  if (graySquares) {
    for(var i = 0; i < graySquares; i++) {
      message = ('<div class="square gray"></div>');
      $('.main').append(message);
    }
  }
};

$(document).ready(addSquare(newHabitUser));
