const flowerLeaves = document.querySelectorAll('.flower__leaf');
const flowerPetals = document.querySelectorAll('.flower__fall-down--yellow, .flower__fall-down--pink, .flower__fall-down--purple'); // Select all petals

// Function to generate a random color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Event listeners for leaves
flowerLeaves.forEach(leaf => {
    leaf.addEventListener('mouseenter', () => {
        const randomColor = getRandomColor();
        leaf.style.backgroundColor = randomColor; // Change background color to random
    });
});

// Event listeners for petals
flowerPetals.forEach(petal => {
    petal.addEventListener('mouseenter', () => {
        const randomColor = getRandomColor();
        petal.style.backgroundColor = randomColor; // Change background color to random
    });
});


// JavaScript to generate multiple stars at random positions
const starsContainer = document.querySelector('.stars');
const numberOfStars = 200; // Set how many stars you want

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`; // Random vertical position
    star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    star.style.animationDelay = `${Math.random() * 5}s`; // Random delay for twinkle
    starsContainer.appendChild(star);
}

