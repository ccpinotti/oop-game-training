// game will be ready upon page loading
$(document).ready(function() {
  var $turtle = $('#turtle');
  var $rabbit = $('#rabbit');
  // audio will continue on loop, nature sounds
  myAudio = new Audio('sounds/269559__vonora__sussex-woodland-meadow-bird-sounds-evening.mp3');
  myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  myAudio.play();


  // this loop contains the functions that move the characters
  $(document).keypress(function(e) {
    if (e.key === "a") {
      $("#turtle").animate({
        left: '+=75px'
      });
      // second part declares the winner
      if (parseInt($turtle.css('left')) >= 710) {
        $('h2').text('The Turtle Wins!!');
        document.onkeydown = function(e) {
          return false;
        }
        console.log(parseInt($turtle.css('left')));

      }
    } else if (e.key === "l") {
      $("#rabbit").animate({
        left: '+=75px'
      });
      if (parseInt($rabbit.css('left')) >= 710) {
        $('h2').text('The Rabbit Wins!!');
        document.onkeydown = function(e) {
          return false;
        }
      }
    }
  // reset both characters and remove the win text
  function resetMe() {
    $("#rabbit").css({
      left: 0
    });
    $("#turtle").css({
      left: 0
    });
    $('h2').remove();
    document.onkeydown = function(e) {
      return true;
    }
  }

  $("#reset").click(function() {
    resetMe();
  });
});
});
