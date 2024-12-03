// (function () {
//     emailjs.init("2dZnMQepo6vUoe7Xb"); // Replace with your EmailJS public key
// })();

// // Handle Form Submission
// document.getElementById("contactForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Send email using EmailJS
//     emailjs.sendForm(service_t0i69pe, template_vq1gd8x, this)
//         .then(function (response) {
//             alert("Email sent successfully!");
//         }, function (error) {
//             alert("Failed to send email. Error: " + JSON.stringify(error));
//         });
// });

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("contactForm");
  
    if (form) {
      form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
  
        // Send email using EmailJS
        emailjs.sendForm("service_t0i69pe", "template_vq1gd8x", this)
          .then(function(response) {
            alert("Email sent successfully!");
          }, function(error) {
            alert("Failed to send email. Error: " + JSON.stringify(error));
          });
      });
    }
  });