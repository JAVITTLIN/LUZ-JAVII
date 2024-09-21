const hearts = document.querySelectorAll('.heart');

function setHeartPosition(heart) {
    const randomX = Math.random() * 100; // Porcentaje
    heart.style.left = `${randomX}%`;
    const randomDelay = Math.random() * 2; // Retraso en segundos
    heart.style.animationDelay = `${randomDelay}s`;
}

function createHeart() {
    hearts.forEach(heart => {
        setHeartPosition(heart);
        heart.style.opacity = '1'; // Reiniciar visibilidad
    });

    setTimeout(() => {
        hearts.forEach(heart => {
            heart.style.opacity = '0'; // Desvanecer corazones
        });
        setTimeout(createHeart, 500); // Repetir después de un tiempo
    }, 8000); // Desaparecer después de 5 segundos
}

// Iniciar el ciclo
createHeart();
