document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    if (emailInput.validity.typeMismatch) {
        errorMessage.textContent = 'Please check your email';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Sent!');
    }
});