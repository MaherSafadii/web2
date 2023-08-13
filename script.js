/* eslint-disable no-undef */
$(document).ready(function() {
    $('#burger').click(function() {
         $("#slide-menu").slideDown();
    });
    $('#close-menu').click(function() {
        $("#slide-menu").slideUp();
   });

   
   $("#facebook-link").attr("href", "https://www.facebook.com/0MaherSafadi");
   $("#twitter-link").attr("href", "https://x.com/mahersafadii");
   $("#dribble-link").attr("href", "https://dribbble.com/shots");
   $("#social-links a").attr("target", "_blank");
});




