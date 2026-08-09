// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const footerText = document.querySelector("footer p");

if (footerText) {
    const year = new Date().getFullYear();

    footerText.innerHTML =
        `© ${year} Mohini Thakur. Built with HTML, CSS & JavaScript.`;
}
