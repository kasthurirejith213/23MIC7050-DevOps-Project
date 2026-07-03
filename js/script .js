// Welcome Message
console.log("Welcome to ABC Technologies");

// Highlight the active menu
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function () {

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });
});