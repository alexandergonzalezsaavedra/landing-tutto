document.addEventListener("click", (e) => {
    if (e.target.matches(".nav-item .nav-link")) {
        const navbarText = document.querySelector(".collapse");
        navbarText.classList.remove("show");
    }
});