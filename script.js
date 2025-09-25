
// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
        
mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});


// Enhanced hover effects and 3D interactions
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.language-card');
    const grid = document.querySelector('.languages-grid');

    

    // Enhanced mouse interaction
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 140, 0, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });

        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });

        // Add tilt effect based on mouse position
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-20px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});


class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles-canvas');
        this.particles = [];
        this.maxParticles = 150;
        this.animationTypes = ['floatUp', 'floatSideways', 'floatDiagonal', 'pulse', 'orbit'];
        this.sizes = ['small', 'medium', 'large', 'extra-large'];
        this.sizeWeights = [0.4, 0.3, 0.2, 0.1]; // Probability weights for sizes
        
        this.init();
        this.startAnimation();
    }

    init() {
        // Create initial batch of particles
        for (let i = 0; i < this.maxParticles; i++) {
            setTimeout(() => {
                this.createParticle();
            }, Math.random() * 5000);
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Randomly assign size based on weights
        const sizeIndex = this.getWeightedRandomIndex(this.sizeWeights);
        particle.classList.add(this.sizes[sizeIndex]);
        
        // Random starting position
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        
        // Random animation type
        const animationType = this.animationTypes[Math.floor(Math.random() * this.animationTypes.length)];
        
        // Set particle properties based on animation type
        this.setupParticleAnimation(particle, animationType, startX, startY);
        
        // Add to DOM
        this.container.appendChild(particle);
        this.particles.push(particle);
        
        // Remove particle after animation completes
        const animationDuration = this.getAnimationDuration(animationType);
        setTimeout(() => {
            this.removeParticle(particle);
        }, animationDuration);
    }

    setupParticleAnimation(particle, type, x, y) {
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        const duration = Math.random() * 10 + 8; // 8-18 seconds
        
        switch(type) {
            case 'floatUp':
                particle.style.setProperty('--drift', (Math.random() - 0.5) * 200 + 'px');
                particle.style.animation = `floatUp ${duration}s linear infinite`;
                break;
                
            case 'floatSideways':
                particle.style.setProperty('--start-y', Math.random() * window.innerHeight + 'px');
                particle.style.setProperty('--drift-y', (Math.random() - 0.5) * 300 + 'px');
                particle.style.animation = `floatSideways ${duration}s linear infinite`;
                break;
                
            case 'floatDiagonal':
                particle.style.animation = `floatDiagonal ${duration}s ease-in-out infinite`;
                break;
                
            case 'pulse':
                particle.style.animation = `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`;
                break;
                
            case 'orbit':
                particle.style.setProperty('--orbit-x', Math.random() * window.innerWidth + 'px');
                particle.style.setProperty('--orbit-y', Math.random() * window.innerHeight + 'px');
                particle.style.setProperty('--orbit-radius', Math.random() * 100 + 50 + 'px');
                particle.style.animation = `orbit ${duration}s linear infinite`;
                break;
        }
        
        // Add random delay
        particle.style.animationDelay = Math.random() * 2 + 's';
    }

    getWeightedRandomIndex(weights) {
        const random = Math.random();
        let weightSum = 0;
        for (let i = 0; i < weights.length; i++) {
            weightSum += weights[i];
            if (random <= weightSum) {
                return i;
            }
        }
        return weights.length - 1;
    }

    getAnimationDuration(type) {
        switch(type) {
            case 'pulse': return 30000; // Keep pulsing particles longer
            case 'orbit': return 25000;
            default: return 20000;
        }
    }

    removeParticle(particle) {
        if (particle && particle.parentNode) {
            particle.parentNode.removeChild(particle);
            const index = this.particles.indexOf(particle);
            if (index > -1) {
                this.particles.splice(index, 1);
            }
        }
    }

    startAnimation() {
        // Continuously create new particles
        setInterval(() => {
            if (this.particles.length < this.maxParticles) {
                this.createParticle();
            }
        }, 200); // Create new particle every 200ms

        // Cleanup old particles periodically
        setInterval(() => {
            this.particles = this.particles.filter(particle => 
                particle.parentNode !== null
            );
        }, 5000);
    }

    // Handle window resize
    handleResize() {
        // Remove all particles and recreate for new dimensions
        this.particles.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
        this.particles = [];
        
        // Recreate particles for new screen size
        setTimeout(() => {
            for (let i = 0; i < this.maxParticles; i++) {
                setTimeout(() => {
                    this.createParticle();
                }, Math.random() * 3000);
            }
        }, 500);
    }
}

// Initialize particle system when page loads
document.addEventListener('DOMContentLoaded', function() {
    const particleSystem = new ParticleSystem();
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            particleSystem.handleResize();
        }, 250);
    });
});

// Optional: Add mouse interaction
document.addEventListener('mousemove', function(e) {
    // Create particle at mouse position occasionally
    if (Math.random() < 0.05) { // 5% chance
        const particle = document.createElement('div');
        particle.className = 'particle small';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.animation = 'pulse 1s ease-out forwards';
        
        document.getElementById('particles-canvas').appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
});


       
window.addEventListener("load", function () {
setTimeout(function () {
    const loader = document.getElementById("loading");
    loader.classList.add("fade-out"); // smooth fade

    // remove from DOM after fade
    setTimeout(() => loader.style.display = "none", 800);
}, 3000); // 5 seconds
});


// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '15px 0';
        header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        header.style.padding = '20px 0';
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Form submission (prevent default for demo)
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Intersection Observer for scroll animations
const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Smooth scroll enhancement for CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#work');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#home');
    const heroContent = document.querySelector('.hero-content');
            
    if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});
