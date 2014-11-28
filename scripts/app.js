var dayObject = function (completed, date) {
  completed = completed;
  date = date;
};

var addSquare = function() {
  var numberOfSquares = 365;
  for(var i = 0; i < numberOfSquares; i++) {
      var randomNumber = Math.random() * 6,
          squareClass = " sq" + (i + 1)
      
      if (randomNumber < 2) {
        var message = ('<div class="square green' + squareClass + '"></div>');
      }

      else if (randomNumber > 4) {
        var message = ('<div class="square red' + squareClass + '"></div>');
      }

      else {
        var message = ('<div class="square gray' + squareClass + '"></div>');
      }

      $('.main').append(message);
  }
};

$(document).ready(addSquare());
