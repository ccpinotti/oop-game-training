$(document).ready(function(){

  $(document).keypress(function(e) {
    if (e.key === "a") {
      $("#turtle").animate({
        left: '+=25px'
      });
    } else if (e.key === "l") {
      $("#rabbit").animate({
        left: '+=25px'
      });
    }
    document.getElementById("Reset").onclick = function() {
      document.getElementById("button").value = "";
    };


  //   $('button').on('click',function() {
  //   $(".key").text("")
  //
  // });
    // check window width
    // compare width turtle/rabbit position
    // check for winner
  });
});
