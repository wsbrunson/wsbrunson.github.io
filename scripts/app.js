var dayObject = function (completed, date) {
  completed = completed;
  date = date;
};

var today = moment().format('L');


var addSquare = function() {
  var numberOfSquares = 365;
  for(var i = 0; i < numberOfSquares; i++) {
      var randomNumber = Math.random() * 6
      
      if (randomNumber < 2) {
        var message = ('<canvas class="square green"></canvas>');
      }
    
      else if (randomNumber > 4) {
        var message = ('<canvas class="square red"></canvas>');
      }
    
      else {
        var message = ('<canvas class="square gray"></canvas>');
      }
      $('.main').find("div").append(message);
  }
};

addSquare();
var now = moment();
console.log(now);