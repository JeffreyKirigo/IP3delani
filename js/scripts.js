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
  $(".wk1").mouseenter(function () {
    $(".p1").show();
  });
  $(".wk1").mouseleave(function () {
    $(".p1").hide();
  });
  $(".wk2").mouseenter(function () {
    $(".p2").show();
  });
  $(".wk2").mouseleave(function () {
    $(".p2").hide();
  });
  $(".wk3").mouseenter(function () {
    $(".p3").show();
  });
  $(".wk3").mouseleave(function () {
    $(".p3").hide();
  });
  $(".wk4").mouseenter(function () {
    $(".p4").show();
  })
  $(".wk4").mouseleave(function () {
    $(".p4").hide();
  });
  $(".wk5").mouseenter(function () {
    $(".p5").show();
  });
  $(".wk5").mouseleave(function () {
    $(".p5").hide();
  });
  $(".wk6").mouseenter(function () {
    $(".p6").show();
  });
  $(".wk6").mouseleave(function () {
    $(".p6").hide();
  });
  $(".wk7").mouseenter(function () {
    $(".p7").show();
  });
  $(".wk7").mouseleave(function () {
    $(".p7").hide();
  });
  $(".wk8").mouseleave(function () {
    $(".p8").hide();
  });
  $(".wk8").mouseenter(function () {
    $(".p8").show();
  });
  $("#submit").click(function (e) { 
    alert("Your message has been successfully received.")
    
  });
});