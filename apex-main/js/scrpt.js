let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');


Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};


var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
});


function submitFeedback() {
  // Get the feedback value from the textarea
  var feedbackText = document.getElementById("feedback").value;

  // Check if the feedback is not empty
  if (feedbackText.trim() !== "") {
      // You can send the feedback to a server here using AJAX or fetch API
      // For simplicity, just displaying a thank you message here
      document.getElementById("feedbackMessage").innerHTML = "Thank you for your feedback!";
  } else {
      // If feedback is empty, display an error message
      document.getElementById("feedbackMessage").innerHTML = "Please enter your feedback before submitting.";
  }
}