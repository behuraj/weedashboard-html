// Login Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    const passwordToggleIcon = document.getElementById('passwordToggleIcon');

    // Password Toggle Functionality
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle icon
            if (type === 'password') {
                passwordToggleIcon.classList.remove('ri-eye-off-line');
                passwordToggleIcon.classList.add('ri-eye-line');
            } else {
                passwordToggleIcon.classList.remove('ri-eye-line');
                passwordToggleIcon.classList.add('ri-eye-off-line');
            }
        });
    }

    // Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;

            // Basic validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }

            // Here you would typically send the data to your backend
            // For now, we'll just redirect to the dashboard
            console.log('Login attempt:', { email, rememberMe });
            
            // Simulate login - replace with actual API call
            // Redirect to dashboard after successful login
            window.location.href = 'index.html';
        });
    }
});
