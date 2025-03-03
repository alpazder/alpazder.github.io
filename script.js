const textElement = document.getElementById("typing-text");
const text = "Hi, I'm Alp Azder";
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && index <= text.length) {
        textElement.innerHTML = text.substring(0, index);
        index++;
    } else if (isDeleting && index >= 0) {
        textElement.innerHTML = text.substring(0, index);
        index--;
    }

    let speed = isDeleting ? 50 : 100; // Typing speed (deletes faster)

    if (index === text.length) {
        isDeleting = true;
        speed = 1000; // Pause before deleting
    } else if (index === 0) {
        isDeleting = false;
        speed = 500; // Pause before typing again
    }

    setTimeout(typeEffect, speed);
}

setTimeout(typeEffect, 500); // Initial delay before typing starts
