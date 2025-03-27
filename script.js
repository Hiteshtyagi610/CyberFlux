function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// Interactive CTA Button
document.querySelector(".cta-button").addEventListener("mouseover", function() {
    this.textContent = "Let's Go!";
});

document.querySelector(".cta-button").addEventListener("mouseout", function() {
    this.textContent = "Join Us";
});