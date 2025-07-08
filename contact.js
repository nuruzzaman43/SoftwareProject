
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('messageText').value
            };
            
            // Basic validation
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', formData);
        });
        
        function showMessage(text, type) {
            const messageEl = document.getElementById('message');
            messageEl.textContent = text;
            messageEl.className = `message ${type}`;
            messageEl.style.display = 'block';
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                messageEl.style.display = 'none';
            }, 5000);
        }
        
        // Smooth animations on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.contact-item, .contact-form, .contact-info, .map-section');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Initialize animation styles
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.contact-item, .contact-form, .contact-info, .map-section');
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
            
            // Trigger initial animation
            setTimeout(animateOnScroll, 100);
        });
        
        window.addEventListener('scroll', animateOnScroll);
    