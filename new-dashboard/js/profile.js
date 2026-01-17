// Profile Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const changePasswordBtn = document.getElementById('changePasswordBtn');
    const changePasswordModal = document.getElementById('changePasswordModal');
    const closePasswordModal = document.getElementById('closePasswordModal');
    const cancelPasswordBtn = document.getElementById('cancelPasswordBtn');
    const changePasswordForm = document.getElementById('changePasswordForm');
    const passwordError = document.getElementById('passwordError');

    // Password toggle elements
    const currentPasswordToggle = document.getElementById('currentPasswordToggle');
    const currentPasswordInput = document.getElementById('currentPassword');
    const currentPasswordToggleIcon = document.getElementById('currentPasswordToggleIcon');
    
    const newPasswordToggle = document.getElementById('newPasswordToggle');
    const newPasswordInput = document.getElementById('newPassword');
    const newPasswordToggleIcon = document.getElementById('newPasswordToggleIcon');
    
    const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordToggleIcon = document.getElementById('confirmPasswordToggleIcon');

    // Open Change Password Modal
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', function() {
            changePasswordModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close Modal Function
    function closeModalFunc() {
        changePasswordModal.classList.remove('active');
        document.body.style.overflow = '';
        changePasswordForm.reset();
        passwordError.style.display = 'none';
        // Reset password visibility
        currentPasswordInput.type = 'password';
        newPasswordInput.type = 'password';
        confirmPasswordInput.type = 'password';
        currentPasswordToggleIcon.className = 'ri-eye-line';
        newPasswordToggleIcon.className = 'ri-eye-line';
        confirmPasswordToggleIcon.className = 'ri-eye-line';
    }

    // Close Modal
    if (closePasswordModal) {
        closePasswordModal.addEventListener('click', closeModalFunc);
    }

    if (cancelPasswordBtn) {
        cancelPasswordBtn.addEventListener('click', closeModalFunc);
    }

    // Close modal when clicking outside
    if (changePasswordModal) {
        changePasswordModal.addEventListener('click', function(e) {
            if (e.target === changePasswordModal) {
                closeModalFunc();
            }
        });
    }

    // Password Toggle Functions
    function togglePasswordVisibility(toggleBtn, input, icon) {
        toggleBtn.addEventListener('click', function() {
            if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'ri-eye-off-line';
            } else {
                input.type = 'password';
                icon.className = 'ri-eye-line';
            }
        });
    }

    // Initialize password toggles
    if (currentPasswordToggle && currentPasswordInput && currentPasswordToggleIcon) {
        togglePasswordVisibility(currentPasswordToggle, currentPasswordInput, currentPasswordToggleIcon);
    }

    if (newPasswordToggle && newPasswordInput && newPasswordToggleIcon) {
        togglePasswordVisibility(newPasswordToggle, newPasswordInput, newPasswordToggleIcon);
    }

    if (confirmPasswordToggle && confirmPasswordInput && confirmPasswordToggleIcon) {
        togglePasswordVisibility(confirmPasswordToggle, confirmPasswordInput, confirmPasswordToggleIcon);
    }

    // Form Validation and Submission
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const currentPassword = currentPasswordInput.value;
            const newPassword = newPasswordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            // Hide error message initially
            passwordError.style.display = 'none';

            // Validate passwords match
            if (newPassword !== confirmPassword) {
                passwordError.style.display = 'block';
                confirmPasswordInput.focus();
                return;
            }

            // Validate password length (minimum 8 characters)
            if (newPassword.length < 8) {
                passwordError.textContent = 'Password must be at least 8 characters long';
                passwordError.style.display = 'block';
                newPasswordInput.focus();
                return;
            }

            // Validate new password is different from current password
            if (currentPassword === newPassword) {
                passwordError.textContent = 'New password must be different from current password';
                passwordError.style.display = 'block';
                newPasswordInput.focus();
                return;
            }

            // Here you would typically make an API call to change the password
            // For now, we'll just show a success message and close the modal
            console.log('Password change request:', {
                currentPassword: currentPassword,
                newPassword: newPassword
            });

            // Simulate API call
            // TODO: Replace with actual API call
            alert('Password changed successfully!');
            closeModalFunc();
        });
    }

    // Real-time password confirmation validation
    if (confirmPasswordInput && newPasswordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            if (confirmPasswordInput.value && newPasswordInput.value) {
                if (confirmPasswordInput.value !== newPasswordInput.value) {
                    passwordError.textContent = 'Passwords do not match';
                    passwordError.style.display = 'block';
                } else {
                    passwordError.style.display = 'none';
                }
            } else {
                passwordError.style.display = 'none';
            }
        });

        newPasswordInput.addEventListener('input', function() {
            if (confirmPasswordInput.value && newPasswordInput.value) {
                if (confirmPasswordInput.value !== newPasswordInput.value) {
                    passwordError.textContent = 'Passwords do not match';
                    passwordError.style.display = 'block';
                } else {
                    passwordError.style.display = 'none';
                }
            } else {
                passwordError.style.display = 'none';
            }
        });
    }
});
