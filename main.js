$(".change-language").click(function() {
  if (document.querySelector(".lang-ru").style.display === "block") {
    $(".lang-ru").slideUp("fast");
    $(".lang-en").slideDown("fast");
    $(".change-language").text("Перейти на русский");
  } else {
    $(".lang-ru").slideDown("fast");
    $(".lang-en").slideUp("fast");
    $(".change-language").text("Switch into English");
  }
});
