document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (name === '') {
        nameError.textContent = 'Name is required';
    }

    if (email === '') {
        emailError.textContent = 'Email is required';
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
    }

    if (password === '') {
        passwordError.textContent = 'Password is required';
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
    }
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
