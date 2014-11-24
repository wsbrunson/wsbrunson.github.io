var dayObject = function (completed, date) {
  completed = completed;
  date = date;
};

var addSquare = function() {
  var numberOfSquares = 365;
  for(var i = 0; i < numberOfSquares; i++) {
      var randomNumber = Math.random() * 6,
          squareClass = " sq" + i
      
      if (randomNumber < 2) {
        var message = ('<canvas class="square green' + squareClass + '"></canvas>');
      }

      else if (randomNumber > 4) {
        var message = ('<canvas class="square red' + squareClass + '"></canvas>');
      }

      else {
        var message = ('<canvas class="square gray' + squareClass + '"></canvas>');
      }

      $('.main').find("div").append(message);
  }
};

addSquare();
