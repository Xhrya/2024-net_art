$(document).ready(function () {
  $(".prediction-box").dblclick(function () {
    var predictions = [
      "It's going to rain gold sparkles all over you this week",
      "I see some fairy dust in your future",
      "Re-watching winx club might prove fruitful",
      "You will find a pot of gold this week",
      "You will ace all yours exam this week",
      "Trust your instincts",
    ];

    var randomPrediction =
      predictions[Math.floor(Math.random() * predictions.length)];
    $(this).hide();

    $(".prediction-message").text(randomPrediction).fadeIn();

    $(this).toggleClass("changecolor");
  });
});
