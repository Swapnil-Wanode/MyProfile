// Contact form submission
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Getting values from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    formMessage.textContent = `Thank you for your message, ${name}! We'll get back to you shortly.`;
    formMessage.style.color = "green";
    form.reset(); // Reset the form
  } else {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  }
});
