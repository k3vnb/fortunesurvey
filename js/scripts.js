$(document).ready(function() {
  $("form#fortune_survey").submit(function(event) {
    event.preventDefault();
    var unlucky = [];
    $("input:checkbox[name=unlucky]:checked").each(function() {
      unlucky.push($(this).val());
    });
    var lucky = [];
    $("input:checkbox[name=lucky]:checked").each(function() {
      lucky.push($(this).val());
    });
    if (unlucky.length > lucky.length)
      $("#results").append("... How are you still alive?")
    if (unlucky.length < lucky.length)
      $("#results").append("Looks like you have some good luck on your side.  Good for you.")
    if (unlucky.length = lucky.length)
      $("#results").append("... Meh.  So-so luck.")

    $("#results").show();
    $("#fortune_survey").hide();

  });
});
