function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function makeGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    const squareSize = 960 / size;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.classList.add('square');

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = getRandomRGB();
            });

            container.appendChild(square);
        }
    }
}

    makeGrid(16);

    document.getElementById('resizeBtn').addEventListener('click', () => {
        let size = prompt('Enter new grid size (1-100):');
        size = parseInt(size, 10);
        if (size >= 1 && size <= 100) {
            makeGrid(size);
        } else {
            alert('Please enter a valid number between 1 and 100.');
        }
    });
