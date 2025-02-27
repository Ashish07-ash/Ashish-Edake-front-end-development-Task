function validateForm() {
    let isValid = true;

    
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

    
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("name-error").textContent = "Full Name is required.";
        isValid = false;
    }

    
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").textContent = "Enter a valid email address.";
        isValid = false;
    }


    let password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("password-error").textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    
    let confirmPassword = document.getElementById("confirm-password").value;
    if (confirmPassword !== password) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}
