const navbarText = document.querySelector(".collapse");
document.addEventListener("click", (e) => {
    if (e.target.matches(".nav-item .nav-link")) {
        navbarText.classList.remove("show");
    }
    if (e.target.matches(".accesos-principales-movil a")) {
        navbarText.classList.remove("show");
    }
});