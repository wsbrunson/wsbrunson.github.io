var HabitSquare = function(completed) {
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

var newHabitUser = [];
newHabitUser.push(new HabitSquare(true, "thr Nov 27 2014"));
newHabitUser.push(new HabitSquare(true, "fri Nov 28 2014"));
newHabitUser.push(new HabitSquare(false, "sat Nov 29 2014"));
newHabitUser.push(new HabitSquare(true, "sun Nov 30 2014"));
newHabitUser.push(new HabitSquare(true, "mon Dec 01 2014"));
newHabitUser.push(new HabitSquare(true, "tue Dec 02 2014"));
newHabitUser.push(new HabitSquare(false, "wed Dec 03 2014"));
newHabitUser.push(new HabitSquare(true, "thr Dec 04 2014"));
newHabitUser.push(new HabitSquare(true, "fri Dec 05 2014"));
newHabitUser.push(new HabitSquare(true, "sat Dec 06 2014"));
newHabitUser.push(new HabitSquare(true, "sun Dec 07 2014"));
newHabitUser.push(new HabitSquare(true, "mon Dec 08 2014"));
newHabitUser.push(new HabitSquare(true, "tue Dec 09 2014"));
newHabitUser.push(new HabitSquare(false));

console.log(newHabitUser);

var squareLookup = function() {
  var lookup = {};
  for (var i = 0, len = array.length; i < len; i++) {
    lookup[array[i].id] = array[i];
}

};

var addSquare = function(squares) {
  var numberOfSquares = 364;
  var squareObjects = squares.length;
  var graySquares = numberOfSquares - squareObjects;

  for(var i = 0; i < squareObjects; i++) {
    $('.main').append(squares[i].htmlClass);
  }

  if (graySquares) {
    for(var i = 0; i < graySquares; i++) {
      message = ('<div class="square gray"></div>');
      $('.main').append(message);
    }
  }
};

var removeSquares = function() {
  $('.main *').remove();
};

$(document).ready(function() {
  addSquare(newHabitUser);

  $('input').click(function() {
    var dateOnClick = new Date();
    console.log(dateOnClick);
    console.log(dateOnClick.toDateString());
    newHabitUser.push(new HabitSquare(true));
    removeSquares();
    addSquare(newHabitUser);
  });
});
