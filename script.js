// Popup Messages with Tareef (Praise)
const popupMessages = [
    {
        title: "To My Bestest Friend❤️",
        message: "Mere life mein teri importance kya hain pr jitna tu sochti hain use kahi jata uper hainn.."
    },
    {
        title: "Full of Love 💕",
        message: "pyarr ke baremein kya hi bolu...tuje toh pata hi hain sab kuchh."
    },
    {
        title: "Always Smiling 😂",
        message: "Your smile is contagious! Your laugh is the best medicine.Ek Bar Agar Dekh Lu toh Barbar Dekhne ka Man krta hain yrrrr..."
    },
    {
        title: "Shining Bright ⭐",
        message: "Tu Star Nhii Puri galaxy hainn..."
    },
    {
        title: "You're Amazing 👑",
        message: "Bakiiiii kitni tafeef kru terii ab samaj nhi rahhh"
    },
    {
        title: "Beautiful Soul 🌸",
        message: "Beauty toh bhaiii sundarrrr attii sundarr!"
    }
];

// Show Popup Function
function showPopup(index) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const message = document.getElementById('popup-message');
    
    if (index < popupMessages.length) {
        title.textContent = popupMessages[index].title;
        message.textContent = popupMessages[index].message;
    }
    
    popup.style.display = 'block';
    createConfetti();
}

// Close Popup Function
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Close popup when clicking outside
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}

// Confetti Effect
function createConfetti() {
    const container = document.getElementById('confetti');
    const colors = ['#ff1493', '#ffb6d9', '#ffd700', '#ff69b4', '#ff1493'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Countdown Timer
function updateCountdown() {
    // Birthday date: June 8, 2026
    const birthdayDate = new Date('June 8, 2026').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = birthdayDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
        
        // If countdown is finished
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
        }
    }, 1000);
}

// Create decorative stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Initialize on page load
window.addEventListener('load', () => {
    createStars();
    updateCountdown();
    
    // Add animation to memory cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.memory-card, .gallery-item, .wish-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// Easter egg - click on Anujaa multiple times for surprise
let clickCount = 0;
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.name-title').addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            showPopup(Math.floor(Math.random() * popupMessages.length));
            clickCount = 0;
        }
    });
});