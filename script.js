document.getElementById('powerUpBtn').addEventListener('click', function() {
    const memeMessage = document.getElementById('memeMessage');
    memeMessage.classList.toggle('hidden');
    
    setTimeout(() => {
        document.querySelector('.center-container').classList.add('fade-out');
    }, 2000); // Show the message for 2 seconds before fade

    setTimeout(() => {
        startSenzuBeanGame();
    }, 3000); // Start the game after 3 seconds
});

function startSenzuBeanGame() {
    // Replace the current container content with the game container
    document.body.innerHTML = '<div class="game-container"></div>';

    const gameContainer = document.querySelector('.game-container');

    // Set up mousemove event for senzu bean spawning
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        // Create a new bean element
        const bean = document.createElement('div');
        bean.classList.add('bean');
        
        // Set the initial position of the bean
        bean.style.left = `${x - 15}px`; // Center the bean horizontally
        bean.style.top = `${y - 15}px`;  // Center the bean vertically
        
        // Add the bean to the game container
        gameContainer.appendChild(bean);

        // Set a random direction and distance for the bean movement
        const randomAngle = Math.random() * 360; // Random angle in degrees
        const randomDistance = Math.random() * 100 + 50; // Random distance from 50 to 150 px

        // Calculate the final position based on the angle and distance
        const deltaX = randomDistance * Math.cos(randomAngle * (Math.PI / 180));
        const deltaY = randomDistance * Math.sin(randomAngle * (Math.PI / 180));

        // Apply the movement as a transform
        bean.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        // Remove the bean after some time
        setTimeout(() => {
            bean.remove();
        }, 1000); // Adjust this value to keep beans on screen longer
    });

    // Set up click event for CTA
    document.addEventListener('click', () => {
        // Redirect to the desired URL
        window.location.href = 'https://dexscreener.com/solana/enzkqdsk6h7kfsuvofawdpbazbuyeqmsqwmnzhugti56'; // Replace with your target URL
    }, { once: true }); // { once: true } ensures the CTA only redirects on the first click
}
