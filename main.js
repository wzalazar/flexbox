$(document).ready(function() {
  var $iframe = $("#show-layout");
  $($iframe.get(0).contentWindow).on("resize", function() {
    $iframe.removeClass("fix-size");
    document.getElementById('#show-layout').contentWindow.location.reload();
  });
  document.getElementById('#show-layout').contentWindow.location.reload();
});
