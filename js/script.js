// Parallax Scrolling Effect
window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;

    // Toggle class for background parallax effect
    document.body.classList.toggle("window-scrolled", scrollY > 50);

    // Move parallax background slightly as user scrolls
    let parallaxBg = document.querySelector(".parallax-bg");
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});
