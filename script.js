// Create initial ambient fireworks
function createFirework(x, y) {
    const fireworksContainer = document.querySelector('.fireworks');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff1493'];
    
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.setProperty('--tx', tx + 'px');
        firework.style.setProperty('--ty', ty + 'px');
        
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

// Create confetti
function createConfetti() {
    const fireworksContainer = document.querySelector('.fireworks');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff1493'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            
            fireworksContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// Celebrate button function
function celebrate() {
    // Create multiple fireworks
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.6;
            createFirework(x, y);
        }, i * 200);
    }
    
    // Create confetti
    createConfetti();
    
    // Add a bounce animation to the button
    const btn = document.querySelector('.celebrate-btn');
    btn.style.animation = 'bounce 0.5s ease';
    setTimeout(() => {
        btn.style.animation = '';
    }, 500);
}

// Add bounce animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
`;
document.head.appendChild(style);

// Create random fireworks periodically
setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 0.6;
    createFirework(x, y);
}, 3000);

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        const sparkle = document.createElement('div');
        sparkle.className = 'firework';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.backgroundColor = '#ffffff';
        sparkle.style.setProperty('--tx', '0px');
        sparkle.style.setProperty('--ty', '0px');
        sparkle.style.width = '2px';
        sparkle.style.height = '2px';
        
        document.querySelector('.fireworks').appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 500);
    }
});

console.log('🎉 Happy New Year 2026! 🎉');
