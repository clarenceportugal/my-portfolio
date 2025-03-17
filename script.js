// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
document.getElementById("dark-mode-toggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});


// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        document.getElementById("contact-form").reset();
    }
});
