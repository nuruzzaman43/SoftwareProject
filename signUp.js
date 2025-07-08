
// Form toggle functionality
function showForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    
    // Remove active class from all buttons
    toggleBtns.forEach(btn => btn.classList.remove('active'));
    
    // Hide all forms
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
    
    // Show selected form and activate button
    if (formType === 'login') {
        loginForm.classList.add('active');
        toggleBtns[0].classList.add('active');
    } else {
        signupForm.classList.add('active');
        toggleBtns[1].classList.add('active');
    }
    
    // Clear any messages
    hideMessage();
}

// Message display functions
function showMessage(text, type) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
    messageEl.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideMessage();
    }, 5000);
}

function hideMessage() {
    const messageEl = document.getElementById('message');
    messageEl.style.display = 'none';
}

// Form validation and submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate login process
    showMessage('Login successful! Welcome back.', 'success');
    
    // Here you would typically send the data to your server
    console.log('Login data:', { email, password });
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Validation
    if (!name || !email || !password || !confirmPassword) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters long', 'error');
        return;
    }
    
    if (!agreeTerms) {
        showMessage('Please agree to the Terms & Conditions', 'error');
        return;
    }
    
    // Simulate signup process
    showMessage('Account created successfully! Please check your email for verification.', 'success');
    
    // Here you would typically send the data to your server
    console.log('Signup data:', { name, email, password });
    
    // Reset form
    document.getElementById('signupForm').reset();
});

// Forgot password functionality
function showForgotPassword() {
    const email = prompt('Please enter your email address:');
    if (email) {
        showMessage('Password reset link sent to your email!', 'success');
    }
}

// Password strength indicator (optional enhancement)
document.getElementById('signupPassword').addEventListener('input', function(e) {
    const password = e.target.value;
    const strength = getPasswordStrength(password);
    
    // You can add a visual indicator here
    console.log('Password strength:', strength);
});

function getPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    
    return strength;
}