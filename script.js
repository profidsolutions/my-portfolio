// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Show when scrolled 300px
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll smoothly to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
