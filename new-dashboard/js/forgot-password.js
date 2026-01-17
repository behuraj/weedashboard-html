// Forgot Password Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const successMessage = document.getElementById('successMessage');
    const emailOrMobileInput = document.getElementById('emailOrMobile');

    // Form Submission
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailOrMobile = emailOrMobileInput.value.trim();

            // Basic validation
            if (!emailOrMobile) {
                alert('Please enter your email or mobile number');
                emailOrMobileInput.focus();
                return;
            }

            // Validate email format or mobile number format (basic check)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const mobilePattern = /^[0-9]{10}$/;
            const isValidEmail = emailPattern.test(emailOrMobile);
            const isValidMobile = mobilePattern.test(emailOrMobile.replace(/\s+/g, ''));

            if (!isValidEmail && !isValidMobile) {
                alert('Please enter a valid email address or 10-digit mobile number');
                emailOrMobileInput.focus();
                return;
            }

            // Here you would typically send the data to your backend
            // For now, we'll just show the success message
            // Simulate API call - replace with actual API call
            // Simulate a brief delay to show loading state
            const submitButton = forgotPasswordForm.querySelector('.login-btn');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<span>Submitting...</span><i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i>';
            submitButton.disabled = true;

            // Simulate API call delay
            setTimeout(function() {
                // Hide form and show success message
                forgotPasswordForm.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Reset button state (in case form is shown again)
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            }, 1500);
        });
    }

    // Add CSS animation for loading spinner
    if (!document.getElementById('loading-spinner-style')) {
        const style = document.createElement('style');
        style.id = 'loading-spinner-style';
        style.textContent = `
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
});
