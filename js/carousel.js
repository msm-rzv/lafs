document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const container = document.querySelector(".carousel-container");
    
    // 1. DUPLICATE ITEMS for seamless loop
    function duplicateItems() {
        // Get original items
        const items = Array.from(track.children);
        
        // Duplicate each item
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }
    
    // Run duplication
    duplicateItems();
    
    // 2. SET UP ANIMATION
    function setupAnimation() {
        // Calculate animation duration based on screen width
        const screenWidth = window.innerWidth;
        let duration;
        
        if (screenWidth >= 1366) {
            duration = 40; // Desktop - slow
        } else if (screenWidth >= 768) {
            duration = 30; // Tablet - medium
        } else {
            duration = 20; // Mobile - faster
        }
        
        // Apply animation
        track.style.animation = `scroll ${duration}s linear infinite`;
        
        // Pause on hover/touch
        container.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        
        container.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
        
        // For touch devices
        container.addEventListener('touchstart', () => {
            track.style.animationPlayState = 'paused';
        });
        
        container.addEventListener('touchend', () => {
            track.style.animationPlayState = 'running';
        });
    }
    
    // Initial setup
    setupAnimation();
    
    // 3. HANDLE WINDOW RESIZE
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Reset animation
            track.style.animation = 'none';
            // Trigger reflow
            void track.offsetWidth;
            // Setup again with new duration
            setupAnimation();
        }, 250);
    });
});