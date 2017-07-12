$(document).ready(function() {
  var $turtle = $('#turtle');
  var $rabbit = $('#rabbit');


  $(document).keypress(function(e) {
    if (e.key === "a") {
      $("#turtle").animate({
        left: '+=75px'
      });
      if (parseInt($turtle.css('left')) >= 1000){
        $('h2').text('The Turtle Wins!!');
        console.log(parseInt($turtle.css('left')));

      }
    } else if (e.key === "l") {
      $("#rabbit").animate({
        left: '+=75px'
      });
      if (parseInt($rabbit.css('left')) >= 1000){
        $('h2').text('The Rabbit Wins!!');
      }
    }
  });

  function resetMe() {
    $("#rabbit").css({
      left: 0
    });
    $("#turtle").css({
      left: 0
    });
    $('h2').remove();
    //reset other player
  }

  $("#reset").click(function() {

    resetMe();
  });
  // el.onclick = reload();

  // document.getElementById("Reset").onclick = function() {
  //   document.getElementById("button").value = "";
  // };


  //   $('button').on('click',function() {
  //   $(".key").text("")
  //
  // });
  // check window width
  // compare width turtle/rabbit position
  // check for winner

});
