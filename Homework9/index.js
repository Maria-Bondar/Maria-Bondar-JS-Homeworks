$(document).ready(function () {
  //task 1
  $("a[href^=http://]").attr("target", "_blank");

  //task 2
  $("h2").find(".head");
  $(".head").css("background-color", "lightgreen");
  $(".head").find(".inner");
  $(".inner").css("font-size", "35px");

  //task 3

  $("h3").each((index, element) => element.before($("div")[index]));

  //task 4

  let countCheckbox = 0;
  $(".chbox").change(function () {
    if (this.checked == true) {
      countCheckbox += 1;
    }
    if (this.checked == false) {
      countCheckbox -= 1;
    }
    if (countCheckbox > 3) {
      $(".chbox").attr("disabled", true);
    }
  });
});
