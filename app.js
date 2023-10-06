function main() {
  let menu = document.getElementById("menu__full");
  menu.addEventListener('click', setNavbar)
  scrollEffect();
  let send = document.getElementById("send__review");
  send.addEventListener('click', sendMail)
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

function sendMail() {
  if ((document.querySelector("#sendername").value =='') || (document.querySelector("#replyto").value == '') || 
                (document.querySelector("#message").value = '') ||(
      document.querySelector("#designation").value = '')) {
    alert("Enter the fields first");
    return;
    }
            (
              function () {
                emailjs.init("Lcxr5HrJTCLCQSm3U");
                }
  )();
            var params={
                sendername: document.querySelector("#sendername").value,
                replyto: document.querySelector("#replyto").value,
                message: document.querySelector("#message").value,
                designation: document.querySelector("#designation").value
            };
            var serviceID="service_486zgew";
            var templateID="template_1qu00h6";
            emailjs.send(serviceID,templateID,params)
            .then(
              res => {
                document.querySelector("#sendername").value = '';
                document.querySelector("#replyto").value = '';
                document.querySelector("#message").value = '';
                document.querySelector("#designation").value = '';
                alert("Review sent successfully");
                }
            )
                .catch();
}

// "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js">
// "https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js">
        $(".body").ripples({
            resolution: 1024,
            dropRadius: 20,
            interactive: true,
            perturbance: 0.02,
        });

main()