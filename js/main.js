/**
 * Stellar Reverb - Cosmic Streetwear E-commerce
 * Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Parallax Effect for Hero Section
    const heroSection = document.querySelector('.hero');
    const cassette = document.querySelector('.cassette-container');
    const stars = document.querySelector('.stars');
    
    if (heroSection && cassette && stars) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const heroHeight = heroSection.offsetHeight;
            const scrollPercentage = Math.min(scrollPosition / heroHeight, 1);
            
            // Parallax for cassette
            cassette.style.transform = `translate(-50%, -50%) translateY(${scrollPercentage * 50}px)`;
            
            // Parallax for stars
            stars.style.transform = `translateY(${scrollPercentage * 30}px)`;
        });
    }
    
    // Random Glitch Effect for Elements
    const glitchElements = document.querySelectorAll('.glitch-text, .glitch-image');
    
    function triggerRandomGlitch() {
        if (glitchElements.length > 0) {
            const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
            randomElement.classList.add('active-glitch');
            
            setTimeout(() => {
                randomElement.classList.remove('active-glitch');
            }, 200);
        }
        
        // Schedule next glitch
        const nextGlitchTime = 3000 + Math.random() * 7000; // Between 3 and 10 seconds
        setTimeout(triggerRandomGlitch, nextGlitchTime);
    }
    
    // Start random glitch effect
    setTimeout(triggerRandomGlitch, 5000);
    
    // Magnetic Hover Effect for Cassette Elements (Easter Egg)
    const cassetteElements = document.querySelectorAll('.cassette-container img, .product-card img');
    
    cassetteElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            // Play subtle magnetic hum sound
            playMagneticHumSound();
            
            // Add magnetic visual effect
            this.classList.add('magnetic-hover');
        });
        
        element.addEventListener('mouseout', function() {
            // Stop sound
            stopMagneticHumSound();
            
            // Remove magnetic visual effect
            this.classList.remove('magnetic-hover');
        });
    });
    
    // Audio Context for Magnetic Hum Sound
    let audioContext;
    let oscillator;
    
    function playMagneticHumSound() {
        try {
            // Initialize audio context if not already created
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            
            // Create oscillator for hum sound
            oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            // Configure oscillator
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(60, audioContext.currentTime); // 60Hz hum
            
            // Set volume (very quiet)
            gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
            
            // Connect nodes
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Start sound
            oscillator.start();
        } catch (e) {
            console.log('Audio not supported or blocked by browser policy');
        }
    }
    
    function stopMagneticHumSound() {
        if (oscillator) {
            oscillator.stop();
            oscillator = null;
        }
    }
    
    // Scrolling Text Animation for Lore Teaser
    const scrollingText = document.querySelector('.scrolling-text');
    
    if (scrollingText) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-text');
                } else {
                    entry.target.classList.remove('animate-text');
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(scrollingText);
    }
    
    // VHS Tracking Effect
    function triggerVHSTracking() {
        const vhsTracking = document.createElement('div');
        vhsTracking.classList.add('vhs-tracking-line');
        document.body.appendChild(vhsTracking);
        
        setTimeout(() => {
            vhsTracking.remove();
        }, 1000);
        
        // Schedule next tracking effect
        const nextTrackingTime = 20000 + Math.random() * 40000; // Between 20 and 60 seconds
        setTimeout(triggerVHSTracking, nextTrackingTime);
    }
    
    // Start VHS tracking effect
    setTimeout(triggerVHSTracking, 15000);
    
    // Hidden Glyphs Easter Egg
    function createHiddenGlyph() {
        const glyph = document.createElement('div');
        glyph.classList.add('hidden-glyph');
        
        // Random position on screen
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        
        // Random glyph character
        const glyphChars = ['◈', '◇', '◆', '◊', '⌘', '⌥', '⎔', '⍟', '⌬'];
        const randomChar = glyphChars[Math.floor(Math.random() * glyphChars.length)];
        
        // Set glyph properties
        glyph.textContent = randomChar;
        glyph.style.left = `${xPos}px`;
        glyph.style.top = `${yPos}px`;
        glyph.style.color = Math.random() > 0.5 ? 'var(--color-cyan)' : 'var(--color-magenta)';
        
        // Add to document
        document.body.appendChild(glyph);
        
        // Fade in and out
        setTimeout(() => {
            glyph.classList.add('visible');
            
            setTimeout(() => {
                glyph.classList.remove('visible');
                
                setTimeout(() => {
                    glyph.remove();
                }, 1000);
            }, 3000);
        }, 100);
        
        // Schedule next glyph
        const nextGlyphTime = 30000 + Math.random() * 60000; // Between 30 seconds and 1.5 minutes
        setTimeout(createHiddenGlyph, nextGlyphTime);
    }
    
    // Start hidden glyph easter egg
    setTimeout(createHiddenGlyph, 45000);
    
    // Add CSS for dynamic elements
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
        .active-glitch {
            animation: intense-glitch 0.2s linear;
        }
        
        @keyframes intense-glitch {
            0% { transform: translate(0); filter: none; }
            20% { transform: translate(-5px, 5px); filter: hue-rotate(90deg); }
            40% { transform: translate(5px, -5px); filter: invert(0.5); }
            60% { transform: translate(-5px, -5px); filter: saturate(200%); }
            80% { transform: translate(5px, 5px); filter: hue-rotate(-90deg); }
            100% { transform: translate(0); filter: none; }
        }
        
        .magnetic-hover {
            filter: brightness(1.2) saturate(1.2);
            transform: scale(1.02);
            transition: all 0.3s ease;
        }
        
        .vhs-tracking-line {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background-color: rgba(255, 0, 255, 0.5);
            z-index: 9999;
            pointer-events: none;
            animation: tracking-line 1s linear;
        }
        
        @keyframes tracking-line {
            0% { transform: translateY(-10px); opacity: 0; }
            10% { transform: translateY(0); opacity: 1; }
            90% { transform: translateY(100vh); opacity: 1; }
            100% { transform: translateY(110vh); opacity: 0; }
        }
        
        .hidden-glyph {
            position: fixed;
            font-size: 24px;
            opacity: 0;
            z-index: 9998;
            pointer-events: none;
            text-shadow: 0 0 10px currentColor;
            transition: opacity 1s ease;
        }
        
        .hidden-glyph.visible {
            opacity: 0.7;
        }
        
        .animate-text {
            animation: text-fade 8s linear;
        }
        
        @keyframes text-fade {
            0% { opacity: 0; transform: translateY(20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
        }
    `;
    
    document.head.appendChild(dynamicStyles);
    
    // Preload images for better performance
    function preloadImages() {
        const imagePaths = [
            'images/backgrounds/cosmic-cassette.png',
            'images/backgrounds/capsule-001-cassette.png',
            'images/products/black-hole-mixtape-tee.jpeg',
            'images/products/gravitational-vu-control.jpeg',
            'images/products/cassette-fragment-relic.png'
        ];
        
        imagePaths.forEach(path => {
            const img = new Image();
            img.src = path;
        });
    }
    
    // Start preloading
    preloadImages();
});
