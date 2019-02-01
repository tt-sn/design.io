$(document).ready(function() {
  $(".menu span:last-child").click(function() {
    $(".menu span")
      .toggleClass("hidden show");
  });
});
$(document).ready(function() {
    $(".menu span:nth-last-child(3)").click(function() {
    $(".menu span")
      .toggleClass("show hidden");
  });  
});

$(document).ready(function() {
    $(".menu span:nth-child(1)").click(function() {
    $(".menu span")
      .toggleClass("show hidden");
  });  
});
