function checker() {
    const emailInput = document.getElementById('email-id');
    const errorMsg = document.getElementById('error-msg');
    const emailValue = emailInput.value;

    // Regular expression for validating email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        errorMsg.style.display = 'none'; // Hide error message if email is valid
    } else {
        errorMsg.style.display = 'block'; // Show error message if email is invalid
    }
}
