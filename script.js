
// Putting all my script in a DOMContentLoaded 
document.addEventListener("DOMContentLoaded", function () {
    
// Grabbing my element from dom

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Form Submission event
    form.addEventListener("submit", function (event) {
        event.preventDefault();

    // Assigning my userInput to variable

        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        // Validation logic

        let isValid = true;
        let messages = [];

        // Validating user name

        if (username.length < 3 ) {
            isValid = false;
            messages.push("Username cannot be less the 3");
        } 

        // Validation email

        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must includes @ and .");
        }

        // Validating password

        if (password.length < 8 ) {
            isValid = false;
            messages.push("Password must be greater than 8");
        }

        // Display Feedback

        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else if (!isValid) {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }




});













});


