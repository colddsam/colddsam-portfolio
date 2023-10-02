function main() {
  let menu = document.getElementById("menu__full");
  menu.addEventListener('click', setNavbar);
  scrollEffect();

};
function setNavbar() {
  let navBar = document.getElementById("sec__wrap");
  if (navBar.style.display === "flex") {
    navBar.style.display = "none";
    document.getElementById("menu__png").src = "https://img.icons8.com/fluency/144/menu--v2.png";
  }
  else {
    navBar.style.display = "flex";
    document.getElementById("menu__png").src = "https://img.icons8.com/fluency/96/return.png";
  }
}
function scrollEffect() {
  $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
}
main()