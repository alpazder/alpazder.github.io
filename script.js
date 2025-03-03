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

    if (index === text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Wait before deleting
    } else if (index === 0) {
        isDeleting = false;
        setTimeout(typeEffect, 500); // Wait before typing again
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
