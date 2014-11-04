var numberOfSquares = 365;

var addSquare = function() {
  for(var i = 0; i < numberOfSquares; i++) {
      console.log("is this looping?")
      var message = ('<canvas id="square"></canvas>');
      $('.main').find("ul").append(message);
  }
};

addSquare();
