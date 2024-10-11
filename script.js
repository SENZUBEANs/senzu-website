document.getElementById('powerUpBtn').addEventListener('click', function() {
    const memeMessage = document.getElementById('memeMessage');
    memeMessage.classList.toggle('hidden');

    // Play the aura sound
    const auraSound = document.getElementById('auraSound');
    auraSound.play();
    
    setTimeout(() => {
        document.querySelector('.center-container').classList.add('fade-out');
    }, 2000);

    setTimeout(() => {
        startSenzuBeanGame();
    }, 3000);
});

function startSenzuBeanGame() {
    document.body.innerHTML = '<div class="game-container"></div>';
    const gameContainer = document.querySelector('.game-container');

    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;

    function updatePosition(x, y) {
        cursorX = x;
        cursorY = y;
        spawnBean(cursorX, cursorY, gameContainer);
    }

    document.addEventListener('mousemove', (event) => {
        updatePosition(event.clientX, event.clientY);
    });

    document.addEventListener('touchmove', (event) => {
        const touch = event.touches[0];
        updatePosition(touch.clientX, touch.clientY);
    });

    document.addEventListener('touchstart', (event) => {
        const touch = event.touches[0];
        updatePosition(touch.clientX, touch.clientY);
    });

    setInterval(() => {
        spawnBean(cursorX, cursorY, gameContainer);
    }, 500);

    document.addEventListener('click', () => {
        window.location.href = 'https://dexscreener.com/solana/enzkqdsk6h7kfsuvofawdpbazbuyeqmsqwmnzhugti56';
    }, { once: true });
}

function spawnBean(x, y, container) {
    const bean = document.createElement('div');
    bean.classList.add('bean');

    bean.style.left = `${x - 15}px`;
    bean.style.top = `${y - 15}px`;

    container.appendChild(bean);

    const randomAngle = Math.random() * 360;
    const randomDistance = Math.random() * 100 + 50;

    const deltaX = randomDistance * Math.cos(randomAngle * (Math.PI / 180));
    const deltaY = randomDistance * Math.sin(randomAngle * (Math.PI / 180));

    bean.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    setTimeout(() => {
        bean.remove();
    }, 1000);
}
