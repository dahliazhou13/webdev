$("h1").text("Hi Doris");

$("button").html("<em>DONT</em>");

$("a").attr("href", "https://www.bing.com");

$("h1").click(function(){
  $("h1").css("color", "purple");
})

$("button").click(function(){
  $("h1").animate({
    opacity: 0.5
  }).animate({
    opacity: 1
  })
})

$(document).keypress(function(e){
  $("h1").text(e.key);
});

$("h1").mouseover(function(){
  $("h1").css("color", "red");
})
