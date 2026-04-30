document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault(); // stop form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    // Clear errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        valid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required";
        valid = false;
    }

    // If valid
    if (valid) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }

});
