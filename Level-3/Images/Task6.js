function validateForm() {
    let isValid = true;

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirm-password-error").textContent = "";


    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required.";
        isValid = false;
    }

    
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        document.getElementById("email-error").textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("email-error").textContent = "Invalid email format.";
        isValid = false;
    }

    
    const password = document.getElementById("password").value;
    if (password === "") {
        document.getElementById("password-error").textContent = "Password is required.";
        isValid = false;
    }


    const confirmPassword = document.getElementById("confirm-password").value;
    if (confirmPassword !== password) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}
