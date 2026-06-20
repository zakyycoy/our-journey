// FUNCTION SWITCH HALAMAN (SIDEBAR MENU)
function switchPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const activePage = document.getElementById(`page-${pageId}`);
    if (activePage) {
        activePage.style.display = 'block';
    }

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    const currentButton = document.getElementById(`btn-${pageId}`);
    if (currentButton) {
        currentButton.classList.add('active');
    }
    
    const topTitle = document.getElementById('top-title');
    if(pageId === 'home') topTitle.innerText = "Welcome Home 💖";
    if(pageId === 'gallery') topTitle.innerText = "Our Sweet Memories 📸";
    if(pageId === 'playlist') topTitle.innerText = "Songs for You 🎵";
    if(pageId === 'about') topTitle.innerText = "About Jaki & Eca 🌸";
}

// MANAGEMENT CONTROL AUDIO PLAYER & VINYL SPIN SPIN
function startVinyl() {
    const vinyl = document.getElementById('vinyl-record');
    if (vinyl) vinyl.classList.add('playing');
}

function stopVinyl() {
    const vinyl = document.getElementById('vinyl-record');
    if (vinyl) vinyl.classList.remove('playing');
}

function playSong(audioSrc, buttonElement) {
    const audioPlayer = document.getElementById('audio-player');
    const allPlayButtons = document.querySelectorAll('.play-btn i');
    
    if (audioPlayer.src.includes(audioSrc) && !audioPlayer.paused) {
        audioPlayer.pause();
        buttonElement.innerHTML = '<i class="fa-solid fa-play"></i>';
        stopVinyl();
        return;
    }

    allPlayButtons.forEach(icon => {
        icon.className = 'fa-solid fa-play';
    });

    audioPlayer.src = audioSrc;
    audioPlayer.play();
    buttonElement.innerHTML = '<i class="fa-solid fa-pause"></i>';
    startVinyl();
}

// SYSTEM GENERATOR HUJAN LOVE JATOH BANYAK
function createFallingHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;

    const heart = document.createElement('i');
    const heartTypes = ['fa-heart', 'fa-heart', 'fa-heart-pulse'];
    const randomType = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    heart.className = `fa-solid ${randomType} falling-heart`;
    heart.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 18 + 10;
    heart.style.fontSize = size + 'px';

    const duration = Math.random() * 4 + 4;
    heart.style.animationDuration = duration + 's';

    const pinkShades = ['#f43f5e', '#ec4899', '#db2777', '#f472b6', '#fda4af'];
    heart.style.color = pinkShades[Math.floor(Math.random() * pinkShades.length)];

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
setInterval(createFallingHeart, 300);

// HITUNG MOMEN INDAH BERJALAN DARI 05/04/2024 SAMPAI SEKARANG (REAL-TIME LIVE COUNTER)
function updateLoveCounter() {
    // Tanggal jadian/awal momen indah: 5 April 2024
    const startDate = new Date("2024-04-05T00:00:00");
    const now = new Date();
    
    const differenceInMs = now - startDate;
    
    // Konversi milidetik ke hari, jam, menit, detik
    const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);
    
    const counterElement = document.getElementById('live-counter');
    if (counterElement) {
        counterElement.innerHTML = `${days} Hari, ${hours} Jam, ${minutes} Menit, ${seconds} Detik`;
    }
}

// Jalankan fungsi hitung mundur real-time setiap 1 detik sekali
setInterval(updateLoveCounter, 1000);
// Jalankan langsung pertama kali saat web dibuka agar tidak nunggu 1 detik kosong
updateLoveCounter();