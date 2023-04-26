const confetti = () => {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#e64c3c', '#3c91e6', '#e6e03c', '#3ce668', '#e63cb3'];

    // Create confetti divs
    for (let i = 0; i < 100; i++) {
        const confettiDiv = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];

        confettiDiv.style.width = '10px';
        confettiDiv.style.height = '10px';
        confettiDiv.style.borderRadius = '5px';
        confettiDiv.style.backgroundColor = color;
        confettiDiv.style.position = 'absolute';
        confettiDiv.style.top = '0';
        confettiDiv.style.left = `${Math.random() * 100}%`;
        confettiDiv.style.animation = 'confetti-fall 1s ease-in-out forwards';

        confettiContainer.appendChild(confettiDiv);
    }

    // Remove confetti divs after animation ends
    setTimeout(() => {
        while (confettiContainer.firstChild) {
            confettiContainer.removeChild(confettiContainer.firstChild);
        }
    }, 3000);
};

export default confetti;