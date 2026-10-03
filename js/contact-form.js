document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submitButton');
    const errorMessages = document.querySelectorAll('.error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        errorMessages.forEach(error => {
            error.textContent = '';
        });

        if (nameInput.value.trim() === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            document.getElementById('emailError').textContent = 'Email is required.';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
            document.getElementById('emailError').textContent = 'Invalid email format.';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            document.getElementById('messageError').textContent = 'Message is required.';
            isValid = false;
        }

        if (isValid) {
            alert('Thank you for your message!');
            form.reset();
        }
    });
});