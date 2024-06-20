/*! For license information please see main.c1abed31.js.LICENSE.txt */
if (window.innerWidth <= 768) {
    const navbarText = document.querySelector(".collapse");
    document.addEventListener("click", (e) => {
        if (e.target.matches(".nav-item .nav-link")) {
            navbarText.classList.remove("show");
        }
        if (e.target.matches(".accesos-principales-movil a")) {
            navbarText.classList.remove("show");
        }
    });
} else {
    console.log("mayor a 768px");
}
