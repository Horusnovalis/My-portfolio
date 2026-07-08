let body = document.getElementById("body");
let btn = document.getElementById("btn");
let icon = document.getElementById("icon");

btn.addEventListener("click", function() {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        icon.src = "./dark_mode_icon.svg";
    } else {
        icon.src = "./sunny_icon.svg";
    }
});