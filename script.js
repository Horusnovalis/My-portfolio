let body = document.getElementById("body");
let btn = document.getElementById("btn");
let icon = document.getElementById("icon");
let navLinks = document.getElementById("nav-links");
let menu = document.getElementById("menu");

btn.addEventListener("click", function() {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        menu.src = "./white_menu_icon.svg";
        icon.src = "./dark_mode_icon.svg";
    } else {
        icon.src = "./light_mode_icon.svg";
        menu.src = "./menu_icon.svg";
    }
});

menu.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
        menu.src = "./close_icon.svg";
        if (body.classList.contains("dark")) {
            menu.src = "./white_close_icon.svg";
        }else {
            menu.src = "./close_icon.svg";
        }
    } else {
        menu.src = "./menu_icon.svg";
        if (body.classList.contains("dark")) {
            menu.src = "./white_menu_icon.svg";
        }
    }
});