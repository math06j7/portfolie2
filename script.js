var menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
    menuButton.parentElement.classList.toggle('menu-show');
    if (menuButton.parentElement.classList.toString() == "menu menu-show") {
        // Hvis menu vises efter tryk
        menuButton.innerHTML = "x";
    } else {
        menuButton.innerHTML = "menu";
    }
});
