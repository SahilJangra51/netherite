// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Buy button click handler
const buyButton = document.querySelector('.buy-button');
buyButton.addEventListener('click', () => {
    // Add loading state
    buyButton.innerHTML = 'Processing...';
    buyButton.disabled = true;
    
    // Simulate payment process
    setTimeout(() => {
        // Reset button state
        buyButton.innerHTML = 'Buy Now';
        buyButton.disabled = false;
        
        // Here you would typically integrate with a payment gateway
        alert('Payment gateway integration will be implemented here.');
    }, 1500);
});

// Add hover effect to price box
const priceBox = document.querySelector('.price-box');
priceBox.addEventListener('mousemove', (e) => {
    const rect = priceBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    priceBox.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(20, 20, 20, 1) 0%,
            rgba(10, 10, 10, 1) 50%
        )
    `;
});

priceBox.addEventListener('mouseleave', () => {
    priceBox.style.background = 'var(--card-bg)';
});

// Add subtle parallax effect to trust badge
const trustBadge = document.querySelector('.trust-badge');
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    trustBadge.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Support button hover effect
const supportButtons = document.querySelectorAll('.support-button');
supportButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
});
