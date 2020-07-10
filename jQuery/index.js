// alert("hello");

/* have jQuery script right before the closing body tag */
$("h1").css("color", "gold");
/* if <script>s are in the <head>, need to check the jQuery is ready */
// $(document).ready(function() {
//   $("h1").css("color", "red");
// });


$("button").click(function(){
  $("h1").css("color", "purple");
  setTimeout(function(){
    $("h1").css("color", "gold");
  },200);
});
/*
for (var i=0; i<document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "purple";
  });
}
*/

  $("h1").hover(function(){
    $(this).css("color", "pink");
    // $(this).addClass("h1Pink");  // doesn't work
    }, function(){
    $(this).css("color", "gold");
    // $(this).removeClass("h1Pink");
  });


// have key show up in <h1>
$(document).keypress(function(e){
  $("h1").text(e.key);
});
