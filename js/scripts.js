$(document).ready(function () {
  $(".fix").click(function (e) {
    $(".fix").hide();
    $("#des").toggle();
    $("#des").show();
  });
  $("#des").click(function (e) {
    $(".fix").show();
    $("#des").toggle();
    $("#des").hide();
  });
  $(".cont").click(function (e) {
    $(".cont").hide();
    $("#dev").toggle();
    $("#dev").show();
  });
  $("#dev").click(function (e) {
    $(".cont").show();
    $("#dev").toggle();
    $("#dev").hide();
  });
  $(".pro").click(function (e) {
    $(".pro").hide();
    $("#prod").toggle();
    $("#prod").show();
  });
  $("#prod").click(function (e) {
    $(".pro").show();
    $("#prod").toggle();
    $("#prod").hide();
  });

});


$(document).ready(function () {
$(".wk2").mouseenter(function () { 
  $(".p2").show();  
});
$(".wk2").mouseleave(function () { 
  $(".p2").hide();  
});
});