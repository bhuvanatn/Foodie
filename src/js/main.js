$(function() {
  $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');
  });
 $("#red_spoon").click(function(event) {
    event.preventDefault();
    window.location.href = "red_spoon.html";
  }); 

  $("#green_spoon").click(function(event) {
    event.preventDefault();
    window.location.href = "green_spoon.html";
  });

  $("#white_spoon").click(function(event) {
    event.preventDefault();
    window.location.href = "white_spoon.html";
  });
});
