$(".btn-container").mouseover(function() {
    $(".btn-container span").css("background-color", "#f1f1f1");
  })

  $(".btn-container > div").mouseover(function() {
    $(".btn-container span").css("background-color", "#f1f1f1");
  })

   $(".btn-container span").mousedown(function() {
    $(this).css("background-color", "rgb(0 0 255 / 0.1)");
  })

  $(".btn-container span").mouseup(function() {
    $(this).css("background-color", "#f1f1f1");
  })