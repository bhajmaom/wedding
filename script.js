// 1. Anniversary Date: Aaj ki date set kar di hai
const anniversaryDate = new Date(); 
anniversaryDate.setHours(0, 0, 0, 0); 

// Countdown Logic - Aaj ke liye isse update kiya gaya hai
function updateTimer() {
    const now = new Date().getTime();
    const target = anniversaryDate.getTime();
    const distance = target - now;

    // Agar anniversary aaj hai (ya nikal gayi hai)
    if (distance <= 0) {
        document.querySelector(".countdown-container").innerHTML = 
            "<h2 style='color: #c9184a; font-family: \"Dancing Script\", cursive; font-size: 2.5rem; animation: pulse 1.5s infinite;'>❤️ Today is the Big Day! Happy Anniversary! ❤️</h2>";
    } else {
        // Normal countdown (agar future date hoti)
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;
    }
}
setInterval(updateTimer, 1000);
updateTimer();

// 2. Music Toggle
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-control");

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicBtn.innerText = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerText = "🎵 Play Music";
    }
}

// 3. Scroll Reveal Logic
function reveal() {
    const elements = document.querySelectorAll(".reveal, .reveal-zoom");
    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// 4. Surprise Popup & Confetti
function triggerCelebration() {
    document.getElementById('surprise-modal').style.display = 'flex';
    
    // Blast of Confetti
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) { return clearInterval(interval); }
      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function closeModal() {
    document.getElementById('surprise-modal').style.display = 'none';
}

// --- FLOWERS GENERATOR ---
function createFlowers() {
    const container = document.getElementById('flower-container');
    const flowers = ['🌸', '🌹', '🌺', '🌷', '🌼']; 
    
    setInterval(() => {
        const flower = document.createElement('div');
        flower.classList.add('moving-flower');
        flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
        
        // Random position and animation speed
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.fontSize = (Math.random() * 20 + 20) + 'px';
        flower.style.animationDuration = (Math.random() * 5 + 7) + 's';
        
        container.appendChild(flower);
        
        // Remove flower after animation finishes
        setTimeout(() => { flower.remove(); }, 10000);
    }, 500); 
}

// Start the flower animation
createFlowers();